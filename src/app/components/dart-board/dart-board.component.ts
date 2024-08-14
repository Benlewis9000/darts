import { Component } from "@angular/core";
import { PageLayoutComponent } from "../page-layout/page-layout.component";
import { DartBoardSegmentService } from "../../services/dart-board-segment.service";
import { DartBoard, DartBoardSegment, DartBoardValue } from "../../model/dart-board";
import { DartBoardSegmentComponent } from "../dart-board-segment/dart-board-segment.component";

@Component({
    selector: 'app-dart-board',
    templateUrl: 'dart-board.component.html',
    standalone: true,
    imports: [PageLayoutComponent, DartBoardSegmentComponent]
})
export class DartBoardComponent{
    selectedValue?: DartBoardSegment;

    readonly dartboard: DartBoard;

    constructor(readonly dartBoardSegmentService: DartBoardSegmentService){
        this.dartboard = dartBoardSegmentService.generateDartboard();
    }

    selectValue(newValue: DartBoardSegment){
        if (this.selectedValue){
            this.selectedValue.selected = false;
        }
        newValue.selected = true;
        this.selectedValue = newValue;
    }
}