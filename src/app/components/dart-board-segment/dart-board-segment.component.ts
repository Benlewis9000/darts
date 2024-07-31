import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DartBoardColor, DartBoardSegment, DartBoardValue } from "../../model/dart-board";

@Component({
    selector: 'app-dart-board-segment',
    templateUrl: 'dart-board-segment.component.html',
    styleUrls: ['dart-board-segment.component.scss'],
    standalone: true
})
export class DartBoardSegmentComponent{
    @Input({required: true}) segment!: DartBoardSegment;

    @Output() onValueSelected = new EventEmitter<DartBoardValue>();

    selectValue(value: DartBoardValue){
        this.onValueSelected.emit(value);
    }
}

export { DartBoardValue, DartBoardSegment };
