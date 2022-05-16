import React from "react";

class Title extends React.Component {
    render(){
        const { title } = this.props;
        return(
            <h1 className="flex justify-center items-center text-4xl text-brand-lightDark self-center text-center  w-[20rem] mt-[1rem] mb-[1rem]"
            >
                {title}
            </h1>
        )
    }
}

export default Title;