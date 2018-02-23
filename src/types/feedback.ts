export class feedback {
    public ID:number;
    public FROM: string;
    public TO: string;
    public COMMENT: string;
    public TYPE: string;

    constructor(){}

}

export class feedbackRoot
{
    public t1:feedback;
    public toppings:string[];

    constructor(){}
}
