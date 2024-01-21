import { PlayerCharacter } from "./Types/CharacterTypes";
import { defaultEquipment } from "./Types/ItemTypes";
import { defaultCharacterAbilities1, defaultCharacterSkills1 } from "./Types/SkillsAbilitiesTypes";

export const defaultCharacter: PlayerCharacter = {
    characterIdentity: {
        genderIdentity: "male",
        name: "John Jonah Jameson",
        descriptor: 'amazing',
        type: 'Speaker',
        focus: 'desires pictures of Spiderman',
        background: `Jameson was raised by David and Betty Jameson. David was an officer in the United States Army, a war veteran decorated as a hero; at home, however, David regularly abused his wife and son. As a result, J. Jonah Jameson grew convinced that "No one's a hero every day of the week" and "Even the real heroes can't keep it up all the time". Later on in life J. Jonah Jameson Jr. discovered that David Jameson was in fact Jonah's foster father, and the brother of J. Jonah Jameson Sr., Jonah's biological father, who had to leave his son behind for undisclosed reasons.

        He was a Boy Scout during his childhood. In high school, his interests were mainly boxing and photography. He met his first wife, Joan, when they both joined their high school's photo club. When the school's three top athletes started bullying him, he fought back and beat all three of them to a pulp. This impressed Joan, and they started dating. They married as soon as they finished school. 
        
        After school, Jameson sought employment as a journalist. When the USA joined World War II in 1941, Jameson served as a war correspondent in Europe.

        After the war, he and Joan had a son, John Jonah III, who grew up to become an astronaut. When Jameson returned from a journalistic mission in Korea, he was grieved to find that his wife Joan Jameson had died in a mugging incident. Focusing on his professional life to dull the pain, he was promoted to editor-in-chief of the Daily Bugle, and eventually came to own the paper, thereby fulfilling his earlier boasts.

        Jameson gained a mostly deserved reputation for journalistic integrity, but his greedy opportunism and unyielding belligerent stubbornness made him more than a few enemies.`
    },
    characterStats: {
        tier: 1,
        effort: 1,
        xp: 0,
        might: {
            pool: 10,
            edge: 0
        },
        speed: {
            pool: 10,
            edge: 0
        },
        intellect: {
            pool: 14,
            edge: 1
        }
    },
    characterSkills: defaultCharacterSkills1,
    characterAbilities: defaultCharacterAbilities1,
    characterEquipment: defaultEquipment
}


// class CharacterModel {
//     constructor(
//         public info: CharacterInfo,
//         public stats = {
//             tier: 1,
//             effort: 1,
//             xp: 0,
//         },
//         public attributes?: { might: Attribute, speed: Attribute, intellect: Attribute },
//         public skills?: Skill[],
//         public companions?: {
//             companionName: string,
//             companionBackground: string,
//             companionType: string,
//         },
//         public attacks?: string,
//         public cyphers?: string,
//         public equipment?: string,
//         public background?: string,
//         public portrait?: string,
//     ) { }
// }

// class CharacterModelBuilder {
//     private character: CharacterModel;

//     constructor(info: CharacterInfo) {
//         this.character = new CharacterModel(info);
//     }

//     withAttributes(attributes: { might: Attribute, speed: Attribute, intellect: Attribute }) {
//         this.character.attributes = attributes;
//         return this;
//     }

//     withStats({ tier, effort, xp }: CharacterStats) {
//         this.character.stats.tier = tier;
//         this.character.stats.effort = effort;
//         this.character.stats.xp = xp;
//         return this;
//     }

//     withSkills(skills: Skill[]) {
//         this.character.skills = skills
//         return this
//     }

//     withCompanions() {
//         return this
//     }

//     withAttacks() {
//         return this
//     }

//     withCyphers() {
//         return this
//     }

//     withBackground() {
//         return this
//     }


//     build() {
//         return this.character;
//     }
// }
