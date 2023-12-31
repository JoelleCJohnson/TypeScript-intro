export interface IBird {
    wings: number
    nocturnal: boolean
    family: string[]
    flies: boolean
}

export interface IHasKilled {
    type: string,
    weight: number,
    color: string
}

export interface IKillerBirds extends IBird {
    edible: boolean,
    hasKilled: IHasKilled[]
    phoneNumber: number
}

