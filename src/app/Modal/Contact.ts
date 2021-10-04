export class Contact {

  id : number;
  nom : string;
  prenom : string;
  telephone : number;
  region : string;



  constructor(nom : string, prenom : string, telephone : number,  region : string){

     
      this.nom = nom;
      this.prenom = prenom;
      this.telephone = telephone;
      this.region = region;
  }
}
