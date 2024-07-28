import { Component, Output } from "@angular/core";
import { PageLayoutComponent } from "../page-layout/page-layout.component";
import { DartBoardSegment, DartBoardSegmentComponent } from "../dart-board-segment/dart-board-segment.component";
import { DartBoardSegmentService } from "../../services/dart-board-segment.service";

@Component({
    selector: 'app-dart-board',
    templateUrl: 'dart-board.component.html',
    standalone: true,
    imports: [PageLayoutComponent, DartBoardSegmentComponent]
})
export class DartBoardComponent{
    readonly segments: DartBoardSegment[];

    constructor(readonly dartBoardSegmentService: DartBoardSegmentService){
        this.segments = dartBoardSegmentService.generateSegments();
    }
}