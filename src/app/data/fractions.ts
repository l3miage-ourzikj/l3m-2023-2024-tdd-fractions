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
export const illFormedException = new Error("ILL FORMED fraction, should be of the form Z/(Z-{0})")


/**
 * Construit, si c'est possible, une fraction à partir d'un nominateur et d'un dénominateur (tous deux dans Z)
 * Renvoie la forme simplifiée de la fraction.
 * @param numérateur Un entier relatif
 * @param dénominateur Un entier relatif différent de 0
 * @returns La fraction nominateur / dénominateur si les contraintes sont respectées
 * @throws "ILL FORMED fraction, should be of the form Z/Z"
 */
export function fraction(numérateur: number, dénominateur: number): Fraction {
    if (!Number.isInteger(numérateur)
        || !Number.isInteger(dénominateur)
        || dénominateur === 0
    ) throw illFormedException;

    let s = Math.sign(numérateur) * Math.sign(dénominateur)
    let n = s * Math.abs(numérateur);
    let d = Math.abs(dénominateur);

    const PGCD = pgcd(n, d);
    n= n/ PGCD;
    d = d / PGCD;

    return {
        toString: () => d != 1 ? `${n}/${d}` : `${n}`,
        numérateur: () => n,
        dénominateur: () => d
    }
}


/* ------------------- FRACTION UTILS ---------------------- */
export function add(f1: Fraction, f2: Fraction): Fraction {
    const n1 = f1.numérateur();
    const d1 = f1.dénominateur();
    const n2 = f2.numérateur();
    const d2 = f2.dénominateur();
    //calcul du résultat
    let newNum = n1 * d2 + n2 * d1;
    let newDenum = d1 * d2;

    //Simplification de la fraction obtenue par division sur le pgcd(newNum,newDenum)
    const PGCD = pgcd(newNum, newDenum);
    newNum = newNum / PGCD;
    newDenum = newDenum / PGCD;

    let s = Math.sign(newNum) * Math.sign(newDenum);
    newNum = s * Math.abs(newNum)
    newDenum = s * Math.abs(newDenum);



    return {
        toString: () => newDenum != 1 ? `${newNum}/${newDenum}` : `${newNum}`,
        numérateur: () => newNum,
        dénominateur: () => newDenum
    }
}

function pgcd(a: number, b: number) {
    if (b) {
        return pgcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}

