mod parametadata;

use parametadata::*;
use scrypto::prelude::*;
#[blueprint]
mod parabox_nft_blueprint {
    use super::*;

    struct ParaboxNFT {
                /// The resource address of all random cards
                para_nft_resource_manager: ResourceManager,
                /// A counter for ID generation
                nft_card_id_counter: u64,
    }


    impl ParaboxNFT {
        pub fn instantiate_component() -> Global<ParaboxNFT> {

 

            // Create an NFT resource with mutable supply
            let (address_reservation, component_address) = 
                    Runtime::allocate_component_address(Runtime::blueprint_id());

            let para_nft_resource_manager =
                ResourceBuilder::new_integer_non_fungible::<ParaMetadata>(OwnerRole::None)
                    .metadata(metadata!(
                        init {
                            "name" => "Para Cards".to_owned(), locked;
                        }
                    ))
                    .mint_roles(mint_roles!(
                        minter => rule!(require(global_caller(component_address)));
                        minter_updater => rule!(deny_all);
                    ))
                    .burn_roles(burn_roles!(
                        burner => rule!(require(global_caller(component_address)));
                        burner_updater => rule!(deny_all);
                    ))
                    .non_fungible_data_update_roles(non_fungible_data_update_roles!(
                        non_fungible_data_updater => rule!(require(global_caller(component_address)));
                        non_fungible_data_updater_updater => rule!(deny_all);
                    ))
                    .create_with_no_initial_supply();

            // Instantiate our component
            Self {
                para_nft_resource_manager,
                nft_card_id_counter: 0,
            }
            .instantiate()
            .prepare_to_globalize(OwnerRole::None)
            .with_address(address_reservation)
            .globalize()
        }




        pub fn mint_para_nft(&mut self) -> Bucket {
            // Take our price out of the payment bucket
            let seed= self.nft_card_id_counter;
            // Mint a new card
            let new_card = ParaMetadata {
                aura: Self::aura_generator(seed),
                base: Self::base_generator(seed),
                pants: Self::pants_generator(seed),
                shirt: Self::shirt_generator(seed),
                eyes: Self::eyes_generator(seed),
                eyebrows: Self::eyebrows_generator(seed),
                facial_hair: Self::facial_hair_generator(seed),
                hair: Self::hair_generator(seed),
                shoes: Self::shoes_generator(seed),
                hat: Self::hat_generator(seed),
                composition: Self::composition_generator(seed),
            };
            let nft_bucket = self.para_nft_resource_manager.mint_non_fungible(
                    &NonFungibleLocalId::Integer(self.nft_card_id_counter.into()),
                    new_card,
                );
            self.nft_card_id_counter += 1;

            // Return the NFT and change
            nft_bucket
        }

    
        fn aura_generator(seed: u64) -> Aura {
            match seed  {
                0 => Aura::Fire,
                1 => Aura::Water,
                2 => Aura::Air,
                3 => Aura::Earth,
                _ => panic!(),
            }
        }

        fn base_generator(seed: u64) -> Base {
            match seed  {
                0 => Base::Wooden,
                1 => Base::Stone,
                2 => Base::Metal,
                3 => Base::Crystal,
                _ => panic!(),
            }
        }

        
        fn pants_generator(seed: u64) -> Pants {
            match seed {
                0 => Pants::Jeans,
                1 => Pants::Shorts,
                2 => Pants::Skirt,
                3 => Pants::Leggings,
                _ => panic!(),
            }
        }
        
        fn shirt_generator(seed: u64) -> Shirt {
            match seed {
                0 => Shirt::TShirt,
                1 => Shirt::ButtonUp,
                2 => Shirt::Hoodie,
                3 => Shirt::TankTop,
                _ => panic!(),
            }
        }
        
        fn eyes_generator(seed: u64) -> Eyes {
            match seed {
                0 => Eyes::Round,
                1 => Eyes::Almond,
                2 => Eyes::Cat,
                3 => Eyes::Oval,
                _ => panic!(),
            }
        }
        
        fn eyebrows_generator(seed: u64) -> Eyebrows {
            match seed {
                0 => Eyebrows::Thin,
                1 => Eyebrows::Thick,
                2 => Eyebrows::Arched,
                3 => Eyebrows::Straight,
                _ => panic!(),
            }
        }
        
        fn facial_hair_generator(seed: u64) -> FacialHair {
            match seed {
                0 => FacialHair::Beard,
                1 => FacialHair::Mustache,
                2 => FacialHair::Goatee,
                3 => FacialHair::CleanShaven,
                _ => panic!(),
            }
        }
        
        fn hair_generator(seed: u64) -> Hair {
            match seed {
                0 => Hair::Long,
                1 => Hair::Short,
                2 => Hair::Curly,
                3 => Hair::Straight,
                _ => panic!(),
            }
        }
        
        fn shoes_generator(seed: u64) -> Shoes {
            match seed {
                0 => Shoes::Sneakers,
                1 => Shoes::Boots,
                2 => Shoes::Sandals,
                3 => Shoes::Heels,
                _ => panic!(),
            }
        }
        
        fn hat_generator(seed: u64) -> Hat {
            match seed {
                0 => Hat::BaseballCap,
                1 => Hat::TopHat,
                2 => Hat::Beanie,
                3 => Hat::CowboyHat,
                _ => panic!(),
            }
        }
        
        fn composition_generator(seed: u64) -> Composition {
            match seed {
                0 => Composition::Nature,
                1 => Composition::Urban,
                2 => Composition::Fantasy,
                3 => Composition::Abstract,
                _ => panic!(),
            }
        }
        

    }
}