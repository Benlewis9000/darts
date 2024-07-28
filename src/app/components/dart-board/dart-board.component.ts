import { Component, Output } from "@angular/core";
import { PageLayoutComponent } from "../page-layout/page-layout.component";
import { DartBoardSegment, DartBoardSegmentComponent, DartBoardValue } from "../dart-board-segment/dart-board-segment.component";
import { DartBoardSegmentService } from "../../services/dart-board-segment.service";

@Component({
    selector: 'app-dart-board',
    templateUrl: 'dart-board.component.html',
    standalone: true,
    imports: [PageLayoutComponent, DartBoardSegmentComponent]
})
export class DartBoardComponent{
    selectedValue?: DartBoardValue;

    readonly segments: DartBoardSegment[];

    constructor(readonly dartBoardSegmentService: DartBoardSegmentService){
        this.segments = dartBoardSegmentService.generateSegments();
    }

    selectValue(newValue: DartBoardValue){
        if (this.selectedValue){
            this.selectedValue.selected = false;
        }
        newValue.selected = true;
        this.selectedValue = newValue;
    }
}