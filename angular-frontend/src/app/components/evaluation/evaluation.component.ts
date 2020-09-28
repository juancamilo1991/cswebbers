import { Component, OnInit } from '@angular/core';
import { SimpleEvalService } from '../../services/simple-eval.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ButtonStateService } from '../../services/button-state.service';
import { Evaluation } from '../../models/Evaluation.model';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {


  evaluations: Evaluation[];
  finalAnswers: Evaluation[];
  radioValues:Evaluation;
  public radioAnswerHoldingArray:Evaluation[] = [];
  fetchNextQuestionWorked:boolean = true;
  data:Number;
  isLastQuestion:boolean = false;
  toggle: Boolean;

  constructor(private simpleService: SimpleEvalService, public snackBar: MatSnackBar, private router: Router,
    private dataService: DataService, private btnService: ButtonStateService) { }

  ngOnInit() {
    this.fetchNextQuestion();
    this.btnService.newData.subscribe(toggle => this.toggle = toggle);  
  }

    fetchNextQuestion(){
      if(!this.radioAnswerHoldingArray.length){
       var question = this.simpleService.getFirstQuestion();
      }
      else if(!this.isLastQuestion){
        var question = this.simpleService.getNextQuestion(this.radioValues);
      }
      else if(this.isLastQuestion && this.answersAreUnique()){
        ///check if all elements in array are different.
        //if yes then send answers to server.  if not, then take survey again.
        this.fetchNextQuestionWorked = false;
        this.disableConfirmButton();
        console.log('very well!'); return
      }
        else {
          this.errorMessageSnackBar();
          return;
        }
          question.subscribe((data:Evaluation[]) => {
            this.evaluations = data;
            console.log('data requested...');
            console.log(this.evaluations);
            this.disableConfirmButton();

          }, (error) => {
            this.fetchNextQuestionWorked = false;
            this.handleErrorAcordingly();
          })
      }

      answersAreUnique(){
      let aliasArray = this.radioAnswerHoldingArray;

      this.radioAnswerHoldingArray.forEach((element) => {
        let amountOfMatches = 0;

        aliasArray.every((aliasElement) => {
          if(element === aliasElement){
            amountOfMatches++;
          }
          if(amountOfMatches > 1){
            console.error('nope!');
            return false;
          }
        });
      });
      return true;
    }

   async handleErrorAcordingly(){
       await this.disableConfirmButton();
       this.errorMessageSnackBar();
    }

     disableConfirmButton = async () => {
       this.radioValues = null;
    }

     sendAnswersToServer(){
      this.router.navigate(['/spinner']);
      this.simpleService.getResult(this.radioAnswerHoldingArray).subscribe(data => 
        this.dataService.changeResult(data))
    }

    submitGuard(){
     this.btnService.updateValue(true);
    }

    showSendButton(){
      //make sendbtn appear
      if(this.radioAnswerHoldingArray.length){
      let classes = {
        'make-button-appear': 
        (((this.radioAnswerHoldingArray[0].body 
          == 'komplett neue Webseite von Grund auf') && (this.radioAnswerHoldingArray.length == 5)) ||
          ((this.radioAnswerHoldingArray[0].body 
            == 'Ich benötige lediglich einige Änderungen an einer bestehenden Webseite') && (this.radioAnswerHoldingArray.length == 4))) && this.answersAreUnique()
      }
      return classes;
    }
    }  

    setDisabledButtonColorClass(){
      let classes = {
        disable: !this.radioValues,
        savebtn: this.radioValues
      }
      return classes;
    }

    onRadioValue(evaluation){
      (!this.fetchNextQuestionWorked) ? this.disableConfirmButton() : this.radioValues = evaluation;
    }

    errorMessageSnackBar = () => {
      if(!this.fetchNextQuestionWorked){
        this.snackBar.open('Something went wrong', 'Please reload page', {
          duration: 5000
        });
      }
      else if(!this.answersAreUnique() || this.radioAnswerHoldingArray.length !== 3){
        this.snackBar.open('Something went wrong', 'please take survey again.', {
          duration: 5000
        })
      }
      else {
        this.snackBar.open('Failed to save Answer', 'Please try again', {
          duration: 5000
        });
      }
    
  }

    saveAnswerToArray(){
        try {
         this.radioAnswerHoldingArray.push(this.radioValues);
         if(((this.radioAnswerHoldingArray[0].body 
            == 'komplett neue Webseite von Grund auf') && (this.radioAnswerHoldingArray.length == 5)) ||
            ((this.radioAnswerHoldingArray[0].body 
              == 'Ich benötige lediglich einige Änderungen an einer bestehenden Webseite') && (this.radioAnswerHoldingArray.length == 4))
         ){
            this.isLastQuestion = true;
         }
         console.log(this.radioAnswerHoldingArray);
         this.fetchNextQuestion();
        }
        catch {
          this.errorMessageSnackBar();
       }
    }
  }
