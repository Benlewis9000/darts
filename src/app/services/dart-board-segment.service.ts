import { Injectable } from "@angular/core";
import { DartBoardSegment, DartBoardValue } from "../components/dart-board-segment/dart-board-segment.component";

const dartBoardRange = 20;

@Injectable({
    providedIn: 'root'
})
export class DartBoardSegmentService{
    generateSegments(): DartBoardSegment[] {
        const segments: DartBoardSegment[] = [];

        const missedValue: DartBoardValue = {
            value: 0,
            displayName: 'MISSED',
            baseColor: 'dark',
        }
        segments.push({values: [missedValue]});

        for (let i = 1; i <= dartBoardRange; i++){
            const baseColor = i % 2 == 0 ? 'dark' : 'light';
            const multiplierColor = i % 2 == 0 ? 'red' : 'green';
            segments.push({values: [
                {
                    value: i,
                    displayName: i.toString(),
                    baseColor: baseColor, 
                },
                {
                    value: i * 2,
                    displayName: 'x2',
                    baseColor: multiplierColor, 
                },
                {
                    value: i * 3,
                    displayName: 'x3',
                    baseColor: multiplierColor, 
                }
            ]})
        }

        const outerBull: DartBoardValue = {
            value: 25,
            displayName: 'OUTER BULL',
            baseColor: 'green',
        }
        const innerBull: DartBoardValue = {
            value: 50,
            displayName: 'INNER BULL',
            baseColor: 'red',
        }
        segments.push({values: [outerBull, innerBull]})
        
        return segments;
    }
}