import { Component, OnInit } from '@angular/core';
import { IngredientService } from './service/ingredient.service'


@Component({
  selector: 'app-food-bilder',
  templateUrl: './food-bilder.component.html',
  styleUrls: ['./food-bilder.component.css']
})
export class FoodBilderComponent implements OnInit {

  // 재료 및 레시피를 가져올 서비스
  ingredientService:IngredientService;

  // 템블릿과 바인딩 되어져 있는 재료 목록
  ingredientList:string[] = [];
  // 냉장고에 들어있는 재료들
  fridgeList:string[] = [];
  // 레시피 리스트
  recipeList:string[] = [];


  constructor() {
    this.ingredientService = new IngredientService();
   }

  ngOnInit() {

    // 재료 가져오기
    this.ingredientList = this.ingredientService.getIngredintList();

  }

  fridgeListAdd($event){
    // FIXME :array의 find가 promiss패턴으로 되어있는듯 나중에 찾아보자
    for(let item of this.fridgeList){
      if($event == item) return;
    }
    
    this.fridgeList.push($event);
    console.log(this.fridgeList);
    this.changeRecipeList();
  }

  changeRecipeList(){
    this.recipeList = this.ingredientService.getRecipe(this.fridgeList);
  }



}
