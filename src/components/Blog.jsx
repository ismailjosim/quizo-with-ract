import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-center font-semibold text-3xl my-4'>See All Question</h3>
            <div>
                <div className="shadow-lg mx-5 my-5 px-3 py-5 rounded-md">
                    <h3 className="font-semibold text-xl my-2">
                        <strong>Question</strong> : What is the Purpose react router?
                    </h3>
                    <p className='leading-8'>
                        <strong>Answer:</strong>  A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. The following illustration shows how react router’s dynamic routing works as compared to traditional static routing.
                    </p>
                </div>
                <div className="shadow-lg mx-5 my-5 px-3 py-5 rounded-md">
                    <h3 className="font-semibold text-xl my-2">
                        <strong>Question</strong> : How to work context API?
                    </h3>
                    <p className='leading-8'>
                        <strong>Answer:</strong>  Store the state in a Context value in the common ancestor component (called the Provider Component), and access it from as many components as needed (called Consumer Components), which can be nested at any depth under this ancestor. This solution has the same benefits as the Props solution, but because of what could be called “hierarchical scoping”, it has the added benefit that any component can access the state in any Context that is rooted above itself in React’s hierarchy, without this state needing to be passed down to it as props. React.js takes care of all the magic behind the scenes to make this work.
                    </p>
                </div>
                <div className="shadow-lg mx-5 my-5 px-3 py-5 rounded-md">
                    <h3 className="font-semibold text-xl my-2">
                        <strong>Question</strong>: Discuss React useRef Hook?
                    </h3>
                    <p className='leading-8'>
                        <strong>Answer:</strong> The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;
