import { Component } from "@angular/core";
import { PageLayoutComponent } from "../page-layout/page-layout.component";
import { DartBoardSegment, DartBoardSegmentComponent, DartBoardValue } from "../dart-board-segment/dart-board-segment.component";
import { DartBoardSegmentService } from "../../services/dart-board-segment.service";
import { DartBoard } from "../../model/dart-board";

@Component({
    selector: 'app-dart-board',
    templateUrl: 'dart-board.component.html',
    standalone: true,
    imports: [PageLayoutComponent, DartBoardSegmentComponent]
})
export class DartBoardComponent{
    selectedValue?: DartBoardValue;

    readonly dartboard: DartBoard;

    constructor(readonly dartBoardSegmentService: DartBoardSegmentService){
        this.dartboard = dartBoardSegmentService.generateDartboard();
    }

    selectValue(newValue: DartBoardValue){
        if (this.selectedValue){
            this.selectedValue.selected = false;
        }
        newValue.selected = true;
        this.selectedValue = newValue;
    }
}