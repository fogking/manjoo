import { Injectable } from '@angular/core';

@Injectable()
export class RecipeVO {

    name: string;
    ingredientList: string[];
    searchKey: string = "";

    constructor(name: string, ingredientList: string[]) {
        this.name = name;
        this.ingredientList = ingredientList.sort();
        
        for(let item of ingredientList){
            this.searchKey += item;
        }
    }


}