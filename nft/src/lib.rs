use scrypto::prelude::*;

#[blueprint]
mod nft_contract {
    use radix_tokens::{
        NonFungibleData,
        NonFungibleVault,
        NonFungibleLocalId,
        NonFungibleBucket,
    };

    enable_method_auth! {
        methods {
            mint_nft => restrict_to: [WHITELIST_ROLE];
            transfer_nft => PUBLIC;
            get_nft_metadata => PUBLIC;
            get_user_nfts => PUBLIC;
            set_whitelist_role => restrict_to: [OWNER];
        }
    }
    
    // Struct representing NFT Metadata
    struct NftMetadata {
        name: String,
        image: String,
        edition: u64,
        artist: String,
    }


    // Struct representing NFT Token
    struct NftToken {
        owner: Address,
        metadata: NftMetadata,
    }

    // NFT Contract struct
    struct NftContract {
        nft_vault: NonFungibleVault,
        nft_id_counter: u64,
        whitelist: ResourceManager,
    }

    // Implementation of the NFT Contract
    impl NftContract {
        // Constructor for the NFT Contract
        pub fn new() -> Global<NftContract> {
            let whitelist_role = OwnerRole::Mintable(rule!(require(global_caller())));
            let whitelist = ResourceBuilder::new_fungible(whitelist_role)
                .metadata(metadata!(
                    init {
                        "name" => "Whitelist Role".to_owned(), locked;
                        "description" => "Role granting minting permissions for NFTs.".to_owned(), locked;
                        "symbol" => "WHITELIST_ROLE".to_owned(), locked;
                    }
                ))
                .mint_initial_supply(0);

            Self {
                nft_vault: NonFungibleVault::new(Address::default()),
                nft_id_counter: 0,
                whitelist,
            }
            .instantiate()
            .globalize()
        }

        // Mint NFT Token
        pub fn mint_nft(&mut self, metadata: NftMetadata) -> NonFungibleBucket {
            // Only allow minting to users with whitelist role
            self.whitelist.mint().unwrap();


            // Increment the NFT ID counter
            self.nft_id_counter += 1;
            let nft_id = self.nft_id_counter;

            // Mint the NFT and store it in the vault
            let nft_data = NonFungibleData::new(metadata.clone());
            let nft_token = NftToken {
                owner: global_caller(),
                metadata,
            };
            self.nft_vault.mint(nft_id, nft_data, nft_token);

            // Return the minted NFT as a bucket
            self.nft_vault.get_bucket(nft_id).unwrap()
        }

        // Transfer NFT Token to another user
        pub fn transfer_nft(&mut self, nft_id: NonFungibleLocalId, recipient: Address) {
            // Check if the caller is the current owner of the NFT
            let nft_bucket = self.nft_vault.get_bucket(nft_id).unwrap();
            assert_eq!(
                nft_bucket.as_non_fungible().owner(),
                global_caller(),
                "Only the owner can transfer the NFT."
            );

            // Transfer the NFT to the recipient
            self.nft_vault.transfer(nft_id, recipient);
        }

        // Get NFT Metadata by NFT ID
        pub fn get_nft_metadata(&self, nft_id: NonFungibleLocalId) -> NftMetadata {
            let nft_bucket = self.nft_vault.get_bucket(nft_id).unwrap();
            nft_bucket.as_non_fungible().metadata().clone()
        }

        // Get a list of NFTs owned by a specific user
        pub fn get_user_nfts(&self, owner: Address) -> Vec<NftMetadata> {
            self.nft_vault
                .get_all_buckets_for_owner(owner)
                .iter()
                .map(|bucket| bucket.as_non_fungible().metadata().clone())
                .collect()
        }

        // Set the whitelist role for a wallet address
        pub fn set_whitelist_role(&mut self, wallet_address: Address) {
            // Only the contract owner can set the whitelist role for a wallet
            assert_eq!(
                global_caller(),
                self.owner(),
                "Only the contract owner can set the whitelist role."
            );

            // Mint the whitelist role to the specified wallet address
            self.whitelist.mint_to(&wallet_address);
        }
    }
}
