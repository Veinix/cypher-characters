import { PlayerCharacter } from "./Types/CharacterTypes"

export enum UserRoles {
    User = 1,
    Admin,
    Owner,
    Guest
}

export interface SavedCharacters {
    savedCharacters: PlayerCharacter[]
}

export interface UserModel {
    username: string,
    password: string,
    role: UserRoles,
    savedCharacters?: SavedCharacters
}

export const guestUser: UserModel = {
    username: "Guest",
    password: "",
    role: UserRoles.Guest
}