class Person{
    constructor(first,last,email,image,phone,gender){
        this.first = first;
        this.last = last;
        this.email = email;
        this.image  = image;
        this.phone = phone;
        this.gender = gender;
    }

    addName() {
        const name = this.first+" "+this.last;
        if(name === null){
            name = "NA";
        }
        const h3 = document.createElement('h3');
        h3.textContent = name;
        return h3;
    }

    addEmail(){
        if(this.email === null){
            this.email = "NA";
        }
        const h4e = document.createElement('h4');
        h4e.textContent = this.emaill
        return h4e;
    }

    addImage(){
        if(this.image === null){
            let n;
            if(this.first !== null && this.last){
               n = this.first[0]+" "+this.last[0];
            }
            else{
                n = "NA";
            }
            const h3i = document.createElement('img');
            h3i.textContent = n;
            return h3i; 
        }
        else{
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
    }

    addPhone(){
        if(this.phone === null){
            const h4p = document.createElement('h4');
            h4p.textContent = "NA";
            return h4p;
        }
        else{
            const h4p = document.createElement('h4');
            h4p.textContent = this.phone;
            return  h4p;
        }
    }

    addGender(){
        if(this.gender === null){
            const h4g = document.createElement('h4');
            h4g.textContent = "NA";
            return h4g;
        }
        else{
            const h4g = document.createElement('h4');
            h4g.textContent = this.gender;
            return h4g;
        }
    }

    addCard(){
        const namee = this.addName();
        const email = this.addEmail();
        const imag = this.addImage();
        const ph = this.addPhone();
        const gen = this.addGender();

        const divI = document.createElement('div');
        divI.setAttribute('class','divImage');
        divI.appendChild(imag);

        const divD = document.createElement('div');
        divD.setAttribute('class','divDetails');
        divD.appendChild(namee);
        divD.appendChild(email);
        divD.appendChild(ph);
        divD.appendChild(gen);

        const card = document.createElement('div');
        card.setAttribute('class','card');
        card.appendChild(divI);
        card.appendChild(divD);
        return card;
    }
}