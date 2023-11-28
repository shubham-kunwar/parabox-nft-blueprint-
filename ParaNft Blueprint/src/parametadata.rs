use scrypto::prelude::*;

#[derive(NonFungibleData, ScryptoSbor)]
pub struct ParaMetadata {
    pub aura: Aura,
    pub base: Base,
    pub pants: Pants,
    pub shirt: Shirt,
    pub eyes: Eyes,
    pub eyebrows: Eyebrows,
    pub facial_hair: FacialHair,
    pub hair: Hair,
    pub shoes: Shoes,
    pub hat: Hat,
    pub composition: Composition,
}


impl ParaMetadata {
   pub fn create( aura: Aura, base: Base, pants: Pants, shirt: Shirt, eyes: Eyes, eyebrows: Eyebrows, facial_hair: FacialHair, hair: Hair, shoes: Shoes, hat: Hat, composition: Composition) -> Self {
       Self {
            aura, base, pants, shirt, eyes, eyebrows, facial_hair, hair, shoes, hat, composition
       }
   }
}



#[derive(ScryptoSbor)]
pub enum Origin {
    Earth,
    Space,
    Fantasy,
    Mythical,
}

#[derive(ScryptoSbor)]
pub enum Aura {
    Fire,
    Water,
    Air,
    Earth,
}

#[derive(ScryptoSbor)]
pub enum Base {
    Wooden,
    Stone,
    Metal,
    Crystal,
}

#[derive(ScryptoSbor)]
pub enum Pants {
    Jeans,
    Shorts,
    Skirt,
    Leggings,
}

#[derive(ScryptoSbor)]
pub enum Shirt {
    TShirt,
    ButtonUp,
    Hoodie,
    TankTop,
}

#[derive(ScryptoSbor)]
pub enum Eyes {
   Round, 
   Almond, 
   Cat, 
   Oval, 
}

#[derive(ScryptoSbor)]
pub enum Eyebrows {
   Thin, 
   Thick, 
   Arched, 
   Straight, 
}

#[derive(ScryptoSbor)]
pub enum FacialHair {
   Beard, 
   Mustache, 
   Goatee, 
   CleanShaven, 
}

#[derive(ScryptoSbor)]
pub enum Hair {
   Long, 
   Short, 
   Curly, 
   Straight, 
}

#[derive(ScryptoSbor)]
pub enum Shoes {
   Sneakers, 
   Boots, 
   Sandals, 
   Heels, 
}

#[derive(ScryptoSbor)]
pub enum Hat {
   BaseballCap, 
   TopHat, 
   Beanie, 
   CowboyHat, 
}

#[derive(ScryptoSbor)]
pub enum Composition {
   Nature, 
   Urban, 
   Fantasy, 
   Abstract, 
}



