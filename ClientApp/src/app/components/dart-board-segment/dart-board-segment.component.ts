import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DartBoardSlice, DartBoardSegment } from "../../model/dart-board";

@Component({
    selector: 'app-dart-board-segment',
    templateUrl: 'dart-board-segment.component.html',
    styleUrls: ['dart-board-segment.component.scss'],
    standalone: true
})
export class DartBoardSegmentComponent{
    @Input({required: true}) segment!: DartBoardSlice;

    @Output() onValueSelected = new EventEmitter<DartBoardSegment>();

    selectValue(value: DartBoardSegment){
        this.onValueSelected.emit(value);
    }
}
