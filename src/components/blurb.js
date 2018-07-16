/***********
 ** Imports
 ************/

//react
import React, { Component } from 'react';

/*************
 ** blurb
 ***************/

class blurb extends Component {
    render() {
        return (
            <section id="self" className="glass">
                <img
                    src={require('./images/Jack-Gerrard.jpg')}
                    alt="Jack Gerrard"
                    id="portrait"
                />

                <p>
                    I am going into third year of Web Development in Cork
                    Instute of Technology. I love JavaScript and Python and I
                    have experience with PHP and WordPress aswell. I also know
                    Java and C# but I prefer to focus on modern Web Dev
                    workflows.{' '}
                </p>

                <p>
                    {' '}
                    I aim to be a full stack Web-Developer. The hardest problem
                    with this for me is choosing which particular framework,
                    library or tool to choose from.{' '}
                </p>
            </section>
        );
    }
}

export default blurb;
