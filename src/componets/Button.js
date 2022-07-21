import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        let{dark}=this.props;
        return (
            <div>
                <button type="button" class="btn btn-dark">{dark}</button>

            </div>
        )
    }
}


/*condition ? exprIfTrue : exprIfFalse
 */

