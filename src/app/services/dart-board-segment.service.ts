import { Injectable } from "@angular/core";
import { DartBoardSegment } from "../components/dart-board-segment/dart-board-segment.component";
import { DartBoard } from "../model/dart-board";

const dartBoardRange = 20;

@Injectable({
    providedIn: 'root'
})
export class DartBoardSegmentService{
    generateDartboard(): DartBoard {
        const segments = new Map<number, DartBoardSegment>();

        // Missed value
        segments.set(0, [{
            baseValue: 0,
            multiplier: 1,
            displayName: 'MISSED',
            baseColor: 'dark',
        }]);

        // Number values, with multipliers
        for (let i = 1; i <= dartBoardRange; i++){
            const baseColor = i % 2 == 0 ? 'dark' : 'light';
            const multiplierColor = i % 2 == 0 ? 'red' : 'green';
            segments.set(i, [
                {
                    baseValue: i,
                    multiplier: 1,
                    displayName: i.toString(),
                    baseColor: baseColor, 
                },
                {
                    baseValue: i,
                    multiplier: 2,
                    displayName: 'x2',
                    baseColor: multiplierColor, 
                },
                {
                    baseValue: i,
                    multiplier: 3,
                    displayName: 'x3',
                    baseColor: multiplierColor, 
                }
            ])
        }

        // Outer and inner bullseye
        segments.set(25, [
            {
                baseValue: 25,
                multiplier: 1,
                displayName: 'OUTER BULL',
                baseColor: 'green',
            },
            {
                baseValue: 25,
                multiplier: 2,
                displayName: 'INNER BULL',
                baseColor: 'red',
            },
        ]);
        
        return segments;
    }
}