import React from  'react'
import { Board } from '../Board'
import { Square } from '../Square'

export class Game extends React.Component {
    render() {
        return (
            <>
                <Board>
                    <Square/>
                </Board>
            </>
        );
    }
}