export class Detail{

    user: string='';
    passwd: string='';
    contact: string='';
    email: string='';
    city: string='';

    constructor(user,passwd,contact,email,city){
        this.user = user;
        this.passwd = passwd;
        this.contact = contact;
        this.email = email;
        this.city = city;
    }
}
