import React from "react";


class Title extends React.Component {
    render() {
        return (
            <section className="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center">
                <h1 className="text-white" style={{ fontFamily: "monospace" }}>{this.props.title}</h1>
                {this.props.subTitle ? (
                    <h3 className="text-white-50">{this.props.subTitle}</h3>
                ) : (
                        ""
                    )}
            </section>
        );
    }
}



export default Title;