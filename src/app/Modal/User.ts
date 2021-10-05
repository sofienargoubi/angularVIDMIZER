export class User {

  id : number;
  nom : string;
  prenom : string;
  email : string;
  pwd : string;



  constructor(nom : string, prenom : string, email : string,  pwd : string){


      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.pwd = pwd;
  }
}
