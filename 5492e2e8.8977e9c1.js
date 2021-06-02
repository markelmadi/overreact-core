(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(109)),i={id:"mutation",title:"Mutating Data"},c={unversionedId:"getting_started/mutation",id:"getting_started/mutation",isDocsHomePage:!1,title:"Mutating Data",description:'What\'s a "Mutation"?',source:"@site/docs/getting_started/mutation.md",slug:"/getting_started/mutation",permalink:"/overreact-core/getting_started/mutation",editUrl:"https://github.com/microsoft/overreact-core/packages/website/edit/master/website/docs/getting_started/mutation.md",version:"current",lastUpdatedBy:"Like Zhu",lastUpdatedAt:1622581971,sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/overreact-core/"},next:{title:"Pagination",permalink:"/overreact-core/getting_started/pagination"}},s=[{value:"What&#39;s a &quot;Mutation&quot;?",id:"whats-a-mutation",children:[]},{value:"An example",id:"an-example",children:[{value:"Mutation Spec",id:"mutation-spec",children:[]},{value:"Setup useMutation",id:"setup-usemutation",children:[]}]},{value:"Advanced Usage",id:"advanced-usage",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"whats-a-mutation"},'What\'s a "Mutation"?'),Object(o.b)("p",null,'A "mutation" is an event to update data on the server. When a mutation completes, the data on the server must be updated, and client state should reflect the server change at the same time. A mutation could also cause "side effects" that leads to more complex server/client state change, beyond what users have explicitly requested.'),Object(o.b)("h2",{id:"an-example"},"An example"),Object(o.b)("p",null,"Let's say you want to create a ",Object(o.b)("inlineCode",{parentName:"p"},"People")," entity on the TripPin service. The plain\nHTTP POST request would look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"POST https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW/People HTTP/1.1\nOData-Version: 4.0\nOData-MaxVersion: 4.0\nContent-Length: 428\nContent-Type: application/json\n{\n    'UserName':'lewisblack',\n    'FirstName':'Lewis',\n    'LastName':'Black',\n    'Emails':[\n        'lewisblack@example.com'\n    ],\n    'AddressInfo':[\n        {\n            Address: '187 Suffolk Ln.',\n            City: {\nCountryRegion: 'United States',\nName: 'Boise',\nRegion: 'ID'\n            }\n        }\n    ],\n    'Gender': 'Male',\n    'Concurrency':635519729375200400\n}\n")),Object(o.b)("p",null,"In order to make this request in overreact, we'll need to create a mutation spec, and handle the call using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/use_mutation"}),Object(o.b)("inlineCode",{parentName:"a"},"useMutation")),"."),Object(o.b)("h3",{id:"mutation-spec"},"Mutation Spec"),Object(o.b)("p",null,"Mutation specs are similar to a data spec for ",Object(o.b)("inlineCode",{parentName:"p"},"useFetch"),". The only differences are:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"It has a mutation spec type of ",Object(o.b)("inlineCode",{parentName:"li"},"MUTATION"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"verb")," in request contract may be ",Object(o.b)("inlineCode",{parentName:"li"},"POST"),", ",Object(o.b)("inlineCode",{parentName:"li"},"PATCH"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"DELETE"),", based on the type of mutation requested."),Object(o.b)("li",{parentName:"ol"},'Users must provide mutation "payload" via ',Object(o.b)("inlineCode",{parentName:"li"},"payloadFactoryFn")," in request contract, as well as necessary headers via ",Object(o.b)("inlineCode",{parentName:"li"},"headerFactoryFn"),"."),Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"sideEffectFn")," function can be provided to ",Object(o.b)("inlineCode",{parentName:"li"},"createSpec")," to perform additional side effects after mutation completes.")),Object(o.b)("p",null,"In our example, let's create the spec like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="people-create-spec.js"',title:'"people-create-spec.js"'}),"import {\n    createRequestContract,\n    createResponseContract,\n    createSpec,\n\n    requestVerbs,\n    responseTypes,\n    specTypes,\n} from '@bingads-webui/overreact';\n\nimport { schema } from './schema';\n\nfunction odataUriFactory() {\n    // Because in this example we'll be adding a new \"People\"\n    // entity, our target URI will be an OData collection,\n    // so no need to identify single entity here.\n    return `/People`;\n}\n\nfunction odataHeaderFactory() {\n    // explicitly set HTTP request headers\n    return {\n        'Content-Type': 'application/json',\n    };\n}\n\nfunction odataPayloadFactory(params) {\n    // Create the JSON payload\n    const { data } = params;\n    return JSON.stringify(data);\n}\n\nconst requestContract = createRequestContract({\n    schema,\n    dataPath: 'people',\n    // Create means to POST data\n    verb: requestVerbs.POST,\n    uriFactoryFn: odataUriFactory,\n    headerFactoryFn: odataHeaderFactory,\n    keySelector: p => p.UserName,\n});\n\nconst responseContract = createResponseContract({\n    requestContract: requestContract,\n    responseType: responseTypes.ENTITY,\n    keySelector: p => p.UserName,\n});\n\nfunction sideEffectFn() {\n    // TODO:\n    // OData protocol specifies that only the ID/ETag shall be \n    // returned for entity creation requests, so on our client\n    // we need to explicitly:\n    //   1. Construct a new People entity with the payload data\n    //      and actual entity ID from response\n    //   2. Insert this entity into People collection in our data store\n}\n\nexport const peopleCreateSpec = \n    createSpec(requestContract, responseContract, specTypes.MUTATION, sideEffectFn);\n")),Object(o.b)("h3",{id:"setup-usemutation"},"Setup useMutation"),Object(o.b)("p",null,"Next let's update ",Object(o.b)("inlineCode",{parentName:"p"},"PeopleContainer")," to support adding more people to the view:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{4,9-10,26-39,48} title="people-container.js"',"{4,9-10,26-39,48}":!0,title:'"people-container.js"'}),"import React, { useMemo } from 'react';\nimport { \n    useFetch,\n    useMutation,\n    useDataRefId,\n} from '@bingads-webui/overreact';\n\nimport { peopleSpec } from './people-spec';\nimport { peopleCreateSpec } from './people-create-spec';\nimport { mockPeopleData } from './mocks';\nimport { PeopleView } from './people-view';\n\nexport function PeopleContainer(props) {\n    const { userName } = props;\n    const dataRefId = useDataRefId();\n\n    const variables = useMemo(() => ({\n        locator: {\n            descriptor: { people: userName },\n            order: ['people'],\n        },\n    }), [userName]);\n\n    const [data] = useFetch(dataRefId, peopleSpec, variables);\n\n    const createFn = useMutation(dataRefId, peopleCreateSpec, {\n        onComplete: (response) => console.log('Created'),\n        preemptiveResponseFn: (dataItems, payload) => {\n            return [\n                ...dataItems,\n                ...payload,\n            ];\n        },\n    });\n\n    const createPeople = useCallback(\n        () => createFn({}, { data: mockPeopleData }), \n        [createFn, mockPeopleData]\n    );\n\n    return (\n        <div>\n            { data && <PeopleView \n                firstName={data.FirstName}\n                lastName={data.LastName}\n                address={data.AddressInfo[0]}\n            />}\n            <button onClick={createPeople}>Create</button>\n        </div>\n    );\n}\n")),Object(o.b)("p",null,'Now when you click on "Create" button, a new ',Object(o.b)("inlineCode",{parentName:"p"},"People")," entity should be created."),Object(o.b)("h2",{id:"advanced-usage"},"Advanced Usage"),Object(o.b)("p",null,"You might have noticed some extra configurations to the ",Object(o.b)("inlineCode",{parentName:"p"},"useMutation")," call - ",Object(o.b)("inlineCode",{parentName:"p"},"onComplete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"preemptiveResponseFn"),". These callbacks provide extra capabilities to the mutation call, to support advanced scenarios to make UI more responsive. Please see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/use_mutation"}),"API references for ",Object(o.b)("inlineCode",{parentName:"a"},"useMutation"))," for details."))}l.isMDXComponent=!0}}]);