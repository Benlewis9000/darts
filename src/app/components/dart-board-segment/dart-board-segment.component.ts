import { Component, EventEmitter, Input, Output } from "@angular/core";

export type DartBoardColor = 'light' | 'dark' | 'red' | 'green'

export const dartBoardColors = {
    light: '$color-timberwolf',
    dark: '$color-gray-dark',
    red: '$color-rust',
    green: '$color-green',
}

export interface DartBoardSegment{
    values: DartBoardValue[],
}

export interface DartBoardValue {
    value: number,
    displayName: string,
    baseColor: DartBoardColor,
}

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
        console.log(`value selected: ${value.value}`)
    }
}