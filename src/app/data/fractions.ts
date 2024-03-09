/**
 * Interface définissant une fraction
 */
export interface Fraction {
    /**
     * Formatte prioritairement la fraction en string "[-] entier si c'est possible
     * ou en string "[-]numérateur/dénominateur" si la forme la plus simple est une fraction
     */
    toString(): string;

    /**
     * Accesseur pour obtenir le nominateur
     */
    numérateur(): number;
    
    /**
     * Accesseur pour obtenir le dénominateur
     */
    dénominateur(): number;
}

/**
 * Définition de l'exception à lever lorsqu'on tente de construire une fraction mal formée
 */
export const illFormedException = new Error("ILL FORMED fraction, should be of the form Z/Z")


/**
 * Construit, si c'est possible, une fraction à partir d'un nominateur et d'un dénominateur (tous deux dans Z)
 * Renvoie la forme simplifiée de la fraction.
 * @param numérateur Un entier relatif
 * @param dénominateur Un entier relatif différent de 0
 * @returns La fraction nominateur / dénominateur si les contraintes sont respectées
 * @throws "ILL FORMED fraction, should be of the form Z/Z"
 */
export function fraction(numérateur: number, dénominateur: number): Fraction {
    if ( !Number.isInteger(numérateur)
        || !Number.isInteger(dénominateur)
        || dénominateur === 0
    ) throw illFormedException;

    const s = Math.sign(numérateur) * Math.sign(dénominateur)
    const n = s * Math.abs(numérateur);
    const d = Math.abs(dénominateur);

    return {
        toString:     () => `${n}/${d}`,
        numérateur:   () => n,
        dénominateur: () => d
    }
}
