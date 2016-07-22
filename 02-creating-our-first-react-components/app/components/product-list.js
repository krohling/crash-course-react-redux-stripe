import React from 'react';

const ProductListRow = (props) => {
    return <li className="media" style={ { cursor: 'pointer' } }>
                        <div className="media-left">
                            <a href="#">
                                <img className="media-object" height="64" src={props.product.image} />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{props.product.name}</h4>
                            <span>{props.product.description}</span>
                        </div>
                    </li>;
}

export default class ProductList extends React.Component {

    render() {
        const products = [
            { 
                id: 1,
                name: 'Lib Tech Skate Banana BTX Snowboard',
                description: 'When youre dropping in on the Lib Tech Skate Banana BTX Snowboard, there is no time for selfies - just face shots and perfectly greased rails. The BTX rocker makes for a playful yet predictable ride on any terrain but truly excels as a jibbing machine.',
                image: 'http://images.evo.com/imgp/700/101705/438222/lib-tech-skate-banana-btx-snowboard-blem-2016-blue.jpg'
            },
            { 
                id: 2,
                name: 'Lib Tech Skate Banana BTX Snowboard',
                description: 'When youre dropping in on the Lib Tech Skate Banana BTX Snowboard, there is no time for selfies - just face shots and perfectly greased rails. The BTX rocker makes for a playful yet predictable ride on any terrain but truly excels as a jibbing machine.',
                image: 'http://images.evo.com/imgp/700/101705/438222/lib-tech-skate-banana-btx-snowboard-blem-2016-blue.jpg'
            },
            { 
                id: 3,
                name: 'Lib Tech Skate Banana BTX Snowboard',
                description: 'When youre dropping in on the Lib Tech Skate Banana BTX Snowboard, there is no time for selfies - just face shots and perfectly greased rails. The BTX rocker makes for a playful yet predictable ride on any terrain but truly excels as a jibbing machine.',
                image: 'http://images.evo.com/imgp/700/101705/438222/lib-tech-skate-banana-btx-snowboard-blem-2016-blue.jpg'
            },
            { 
                id: 4,
                name: 'Lib Tech Skate Banana BTX Snowboard',
                description: 'When youre dropping in on the Lib Tech Skate Banana BTX Snowboard, there is no time for selfies - just face shots and perfectly greased rails. The BTX rocker makes for a playful yet predictable ride on any terrain but truly excels as a jibbing machine.',
                image: 'http://images.evo.com/imgp/700/101705/438222/lib-tech-skate-banana-btx-snowboard-blem-2016-blue.jpg'
            }
        ]
        return  <ul className="media-list">
                    {products.map((p) => (<ProductListRow key={p.id} product={p} />))}
                </ul>;
    }

}