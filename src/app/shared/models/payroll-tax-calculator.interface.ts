export interface TaxCalculator {
    join: Date;
    type: string;
    isWNA: boolean;
    npwp: boolean;
    isMutasi: boolean;
    bulan: number;
    ptkp: number;
    regIncome: { key: string; value: number }[];
    thr: number;
    bonus: number;
    jkkRate: number;
    jkmRate: number;
    bpjsRate: number;
    bpjsCompRate: number;
    isBJab: boolean;
    bJabRate: number;
    jhtRate: number;
    jpRate: number;
}
