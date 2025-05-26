import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Engineer",
                    "Api Developer",
                    "Next.js Developer",
                    "Frontend React.js",
                    "Frontend Next.js",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
