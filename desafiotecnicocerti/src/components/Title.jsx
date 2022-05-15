import React from "react";

class Title extends React.Component {
    render(){
        const { title } = this.props;
        return(
            <h1 className="flex justify-center items-center text-6xl text-brand-secondary h-[5rem] self-center text-center bg-brand-primary w-[20rem] rounded-lg mt-[1.5rem] border-2 border-brand-secondary"
            >
                {title}
            </h1>
        )
    }
}

export default Title;