"use strict";(self.webpackChunkmy_storybook_nextjs=self.webpackChunkmy_storybook_nextjs||[]).push([[484],{"./stories/Task.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionsData:()=>ActionsData,Archived:()=>Archived,Default:()=>Default,LongTitle:()=>LongTitle,Pinned:()=>Pinned,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_Task__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/Task.tsx");const ActionsData={onArchiveTask:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),onPinTask:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},__WEBPACK_DEFAULT_EXPORT__={component:_Task__WEBPACK_IMPORTED_MODULE_1__.A,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...ActionsData}},Default={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},Pinned={args:{task:{...Default.args.task,state:"TASK_PINNED"}}},Archived={args:{task:{...Default.args.task,state:"TASK_ARCHIVED"}}},LongTitle={args:{task:{...Default.args.task,title:"This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!"}}},__namedExportsOrder=["ActionsData","Default","Pinned","Archived","LongTitle"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      id: '1',\n      title: 'Test Task',\n      state: 'TASK_INBOX'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Pinned.parameters={...Pinned.parameters,docs:{...Pinned.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...Default.args.task,\n      state: 'TASK_PINNED'\n    }\n  }\n}",...Pinned.parameters?.docs?.source}}},Archived.parameters={...Archived.parameters,docs:{...Archived.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...Default.args.task,\n      state: 'TASK_ARCHIVED'\n    }\n  }\n}",...Archived.parameters?.docs?.source}}},LongTitle.parameters={...LongTitle.parameters,docs:{...LongTitle.parameters?.docs,source:{originalSource:"{\n  args: {\n    task: {\n      ...Default.args.task,\n      title: longTitleString\n    }\n  }\n}",...LongTitle.parameters?.docs?.source}}}},"./stories/Task.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Task});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function Task({task:{id,title,state},onArchiveTask,onPinTask}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:`list-item ${state}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{htmlFor:`archiveTask-${id}`,"aria-label":`archiveTask-${id}`,className:"checkbox",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${id}`,checked:"TASK_ARCHIVED"===state}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"checkbox-custom",onClick:()=>onArchiveTask(id)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:`title-${id}`,"aria-label":title,className:"title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",value:title,readOnly:!0,name:"title",id:`title-${id}`,placeholder:"Input title",style:{textOverflow:"ellipsis"}})}),"TASK_ARCHIVED"!==state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"pin-button",onClick:()=>onPinTask(id),id:`pinTask-${id}`,"aria-label":`pinTask-${id}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon-star"})},`pinTask-${id}`)]})}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:"{\r\n    id: string;\r\n    title: string;\r\n    state: string;\r\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"string",required:!0}}]}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}}}}]);