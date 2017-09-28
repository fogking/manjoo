import { Injectable } from '@angular/core';
import { RecipeVO } from './recipeVO';

@Injectable()
export class IngredientService {

  ingredientList:string[] = [];
  recipeList:string[] = [];

  // 레시피 
  recipe:RecipeVO[];



  constructor() {

    this.recipe = [
      new RecipeVO( "계란 후라이",
                   ["식용유","달걀"]),
      new RecipeVO( "간장 계란 밥", 
                    ["식용유","달걀","간장","밥","참기름","파"]),
      new RecipeVO( "파 기름", 
                    ["식용유","파"]),
    ];

  }

  getIngredintList() {
    
    this.ingredientList = ['식용유','달걀','간장','밥','참기름','파'];
    this.ingredientList.sort();
    return this.ingredientList;    
  }

  getRecipe(ingredientList:string[]) {
    
    ingredientList.sort();

    let ingredientString:string = "";
    
    for(let item of ingredientList){
      ingredientString += item;
    }
    
    console.log(ingredientString);

    return this.calTest(ingredientString);
    


  }

  // FIXME : 원래 서버에서 내려줘되는거임.... 서버 개발하면 바꾸자.. 통신으로..
  private calTest(key:string){

    let rtnRecipeList:string[]=[];

    for(let item of this.recipe) {
      if(item.searchKey == key) {
        
        rtnRecipeList.push(item.name);
      }
        
    }

    console.log(rtnRecipeList);
    
    return rtnRecipeList;
  }

}
