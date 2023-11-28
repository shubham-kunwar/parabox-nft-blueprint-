import"./modulepreload-polyfill.c7c6310f.js";import{j as e,B as o,_ as S,F as v,H as P,T as m,L as W,r as s,b as f,P as k,c as F}from"./text.0bb5df42.js";import{c as N}from"./chrome-local-store.60de0fbe.js";import{C as R}from"./connector-client.74f05fda.js";import{d as p}from"./Subject.c67f7ae3.js";import{a as j}from"./index.es.095da3c8.js";import{l as A}from"./logger.8aad6c34.js";/* empty css              */import"./blake2b.e5109153.js";import"./first.9e6ac58d.js";import"./switchMap.deec5196.js";var b="/home/runner/work/connector-extension/connector-extension/src/components/qr-code/qr-code.tsx";const E=({value:i})=>e(o,{justify:"center",p:"none",mb:"xl",children:e(o,{style:{background:"#ECECEC",borderRadius:"16px",padding:"20px"},border:"true",children:e(S,{bgColor:"#ECECEC",size:162,value:i},void 0,!1,{fileName:b,lineNumber:18,columnNumber:7},void 0)},void 0,!1,{fileName:b,lineNumber:10,columnNumber:5},void 0)},void 0,!1,{fileName:b,lineNumber:9,columnNumber:3},void 0);var g="/home/runner/work/connector-extension/connector-extension/src/pairing/components/pairing-header.tsx";const w=({header:i,children:t})=>e(v,{children:[e(P,{mb:"lg",children:i},void 0,!1,{fileName:g,lineNumber:7,columnNumber:5},void 0),e(m,{color:"radixGrey2",style:{color:"white",lineHeight:"23px"},children:t},void 0,!1,{fileName:g,lineNumber:8,columnNumber:5},void 0)]},void 0,!0);var a="/home/runner/work/connector-extension/connector-extension/src/pairing/components/connection-password.tsx";const _=({connectionPassword:i})=>i?e(v,{children:[e(w,{header:"Radix Wallet Connector",children:"Scan the QR code with the Radix Wallet app on your mobile phone to start using it with dApps in this web browser."},void 0,!1,{fileName:a,lineNumber:13,columnNumber:7},void 0),e(o,{mt:"3xl",p:"none",children:e(E,{value:i,"data-testid":"custom-element"},void 0,!1,{fileName:a,lineNumber:18,columnNumber:9},void 0)},void 0,!1,{fileName:a,lineNumber:17,columnNumber:7},void 0),e(o,{textAlign:"center",children:e(W,{style:{fontSize:"16px",color:"white",fontWeight:"bold"},href:"https://radixdlt.com",target:"_blank",children:"Don't have Radix Wallet?"},void 0,!1,{fileName:a,lineNumber:21,columnNumber:9},void 0)},void 0,!1,{fileName:a,lineNumber:20,columnNumber:7},void 0)]},void 0,!0):null,I="/assets/wallet-connect-active-icon.f78a603e.svg";var n="/home/runner/work/connector-extension/connector-extension/src/pairing/components/connection-status.tsx";const T=({onForgetWallet:i})=>{const[t,c]=s.exports.useState(!1);return e(v,{children:[e(o,{py:"small",flex:"col",justify:"between",style:t?{filter:"blur(10px)",height:"100%"}:{height:"100%"},children:[e(o,{children:[e(w,{header:"Radix Wallet Connector"},void 0,!1,{fileName:n,lineNumber:80,columnNumber:11},void 0),e(o,{mt:"3xl",bg:"white",style:{borderRadius:"16px",boxShadow:"0px 4px 7px rgba(0, 0, 0, 0.25)",padding:"30px",display:"flex"},children:[e("img",{src:I},void 0,!1,{fileName:n,lineNumber:91,columnNumber:13},void 0),e(o,{style:{marginLeft:"20px"},children:[e(m,{style:{color:"#003057",fontSize:"16px",lineHeight:"23px",fontWeight:"600"},children:"Radix Wallet linked"},void 0,!1,{fileName:n,lineNumber:93,columnNumber:15},void 0),e(m,{style:{color:"#8A8FA4"},children:"to this web browser"},void 0,!1,{fileName:n,lineNumber:103,columnNumber:15},void 0)]},void 0,!0,{fileName:n,lineNumber:92,columnNumber:13},void 0)]},void 0,!0,{fileName:n,lineNumber:81,columnNumber:11},void 0)]},void 0,!0,{fileName:n,lineNumber:79,columnNumber:9},void 0),e(o,{px:"medium",mt:"3xl",style:{textAlign:"center"},children:e(f,{text:!0,onClick:()=>{c(!0)},style:{fontSize:"16px",color:"white",fontWeight:"bold"},children:"Forget this Radix Wallet"},void 0,!1,{fileName:n,lineNumber:108,columnNumber:11},void 0)},void 0,!1,{fileName:n,lineNumber:107,columnNumber:9},void 0)]},void 0,!0,{fileName:n,lineNumber:69,columnNumber:7},void 0),(()=>t?e(o,{position:"absolute",bg:"dark",style:{margin:"-17px -32px",height:"100vh"},full:!0,items:"center",justify:"center",children:e(o,{flex:"col",bg:"white",p:"medium",style:{borderRadius:"16px",maxWidth:"75vw"},children:[e(m,{mt:"md",style:{color:"#003057",fontSize:"18px",fontWeight:"600",textAlign:"center"},children:"Forget Wallet"},void 0,!1,{fileName:n,lineNumber:34,columnNumber:11},void 0),e(m,{style:{color:"#8A8FA4",margin:"16px 0",fontSize:"14px",textAlign:"center"},children:"This browser will no longer connect to your Radix Wallet"},void 0,!1,{fileName:n,lineNumber:45,columnNumber:11},void 0),e(o,{items:"center",style:{gap:"8px"},children:[e(f,{secondary:!0,onClick:()=>c(!1),children:"Cancel"},void 0,!1,{fileName:n,lineNumber:56,columnNumber:13},void 0),e(f,{onClick:()=>i(),full:!0,children:"Forget"},void 0,!1,{fileName:n,lineNumber:59,columnNumber:13},void 0)]},void 0,!0,{fileName:n,lineNumber:55,columnNumber:11},void 0)]},void 0,!0,{fileName:n,lineNumber:25,columnNumber:9},void 0)},void 0,!1,{fileName:n,lineNumber:17,columnNumber:7},void 0):null)()]},void 0,!0)};var x="/home/runner/work/connector-extension/connector-extension/src/pairing/pairing.tsx";const z=()=>{const[i,t]=s.exports.useState("loading"),[c,d]=s.exports.useState();return s.exports.useEffect(()=>{const l=R({source:"extension",target:"wallet",signalingServerBaseUrl:p.signalingServer.baseUrl,isInitiator:p.webRTC.isInitiator,logger:A});chrome.storage.onChanged.addListener((r,u)=>{if(u==="local"&&r.connectionPassword){const{newValue:y}=r.connectionPassword;y||h()}});const C=l.connectionPassword$.subscribe(r=>{d(r==null?void 0:r.toString("hex"))}),h=()=>N.getItem("connectionPassword").andThen(({connectionPassword:r})=>r?(l.setConnectionPassword(Buffer.from(r,"hex")),j(null)):(l.connect(),t("notPaired"),l.generateConnectionPassword().andThen(u=>l.connected().andThen(()=>(l.disconnect(),N.setItem({connectionPassword:u.toString("hex")})))))).map(()=>{t("paired")});return h(),()=>{l.destroy(),C.unsubscribe()}},[t,d]),e(k,{children:[i==="notPaired"&&e(_,{connectionPassword:c},void 0,!1,{fileName:x,lineNumber:80,columnNumber:9},void 0),i==="paired"&&e(T,{onForgetWallet:()=>{N.removeItem("connectionPassword")}},void 0,!1,{fileName:x,lineNumber:83,columnNumber:9},void 0)]},void 0,!0,{fileName:x,lineNumber:78,columnNumber:5},void 0)};var B="/home/runner/work/connector-extension/connector-extension/src/pairing/main.tsx";F.createRoot(document.getElementById("root")).render(e(z,{},void 0,!1,{fileName:B,lineNumber:7,columnNumber:62},globalThis));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpcmluZy40NWFiZWEyOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvcXItY29kZS9xci1jb2RlLnRzeCIsIi4uLy4uL3NyYy9wYWlyaW5nL2NvbXBvbmVudHMvcGFpcmluZy1oZWFkZXIudHN4IiwiLi4vLi4vc3JjL3BhaXJpbmcvY29tcG9uZW50cy9jb25uZWN0aW9uLXBhc3N3b3JkLnRzeCIsIi4uLy4uL3NyYy9wYWlyaW5nL2Fzc2V0cy93YWxsZXQtY29ubmVjdC1hY3RpdmUtaWNvbi5zdmciLCIuLi8uLi9zcmMvcGFpcmluZy9jb21wb25lbnRzL2Nvbm5lY3Rpb24tc3RhdHVzLnRzeCIsIi4uLy4uL3NyYy9wYWlyaW5nL3BhaXJpbmcudHN4IiwiLi4vLi4vc3JjL3BhaXJpbmcvbWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vYm94J1xuaW1wb3J0IFFSQ29kZSBmcm9tICdyZWFjdC1xci1jb2RlJ1xuXG50eXBlIFFyQ29kZVByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBRckNvZGUgPSAoeyB2YWx1ZSB9OiBRckNvZGVQcm9wcykgPT4gKFxuICA8Qm94IGp1c3RpZnk9XCJjZW50ZXJcIiBwPVwibm9uZVwiIG1iPVwieGxcIj5cbiAgICA8Qm94XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI0VDRUNFQycsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzE2cHgnLFxuICAgICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICB9fVxuICAgICAgYm9yZGVyPVwidHJ1ZVwiXG4gICAgPlxuICAgICAgPFFSQ29kZSBiZ0NvbG9yPVwiI0VDRUNFQ1wiIHNpemU9ezE2Mn0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgIDwvQm94PlxuICA8L0JveD5cbilcbiIsImltcG9ydCB7IEhlYWRlciwgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnXG5cbnR5cGUgUGFpcmluZ0hlYWRlclByb3BzID0geyBoZWFkZXI6IHN0cmluZzsgY2hpbGRyZW4/OiBzdHJpbmcgfVxuXG5leHBvcnQgY29uc3QgUGFpcmluZ0hlYWRlciA9ICh7IGhlYWRlciwgY2hpbGRyZW4gfTogUGFpcmluZ0hlYWRlclByb3BzKSA9PiAoXG4gIDw+XG4gICAgPEhlYWRlciBtYj1cImxnXCI+e2hlYWRlcn08L0hlYWRlcj5cbiAgICA8VGV4dCBjb2xvcj1cInJhZGl4R3JleTJcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbGluZUhlaWdodDogJzIzcHgnIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGV4dD5cbiAgPC8+XG4pXG4iLCJpbXBvcnQgeyBCb3gsIExpbmssIFFyQ29kZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBQYWlyaW5nSGVhZGVyIH0gZnJvbSAnLi9wYWlyaW5nLWhlYWRlcidcblxuZXhwb3J0IGNvbnN0IENvbm5lY3Rpb25QYXNzd29yZCA9ICh7XG4gIGNvbm5lY3Rpb25QYXNzd29yZCxcbn06IHtcbiAgY29ubmVjdGlvblBhc3N3b3JkPzogc3RyaW5nXG59KSA9PiB7XG4gIGlmICghY29ubmVjdGlvblBhc3N3b3JkKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYWlyaW5nSGVhZGVyIGhlYWRlcj1cIlJhZGl4IFdhbGxldCBDb25uZWN0b3JcIj5cbiAgICAgICAgU2NhbiB0aGUgUVIgY29kZSB3aXRoIHRoZSBSYWRpeCBXYWxsZXQgYXBwIG9uIHlvdXIgbW9iaWxlIHBob25lIHRvIHN0YXJ0XG4gICAgICAgIHVzaW5nIGl0IHdpdGggZEFwcHMgaW4gdGhpcyB3ZWIgYnJvd3Nlci5cbiAgICAgIDwvUGFpcmluZ0hlYWRlcj5cbiAgICAgIDxCb3ggbXQ9XCIzeGxcIiBwPVwibm9uZVwiPlxuICAgICAgICA8UXJDb2RlIHZhbHVlPXtjb25uZWN0aW9uUGFzc3dvcmR9IGRhdGEtdGVzdGlkPVwiY3VzdG9tLWVsZW1lbnRcIiAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcsIGNvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX1cbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYWRpeGRsdC5jb21cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICB7YERvbid0IGhhdmUgUmFkaXggV2FsbGV0P2B9XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fZjc4YTYwM2VfX1wiIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgUGFpcmluZ0hlYWRlciB9IGZyb20gJy4vcGFpcmluZy1oZWFkZXInXG5pbXBvcnQgV2FsbGV0Q29ubmVjdGVkSWNvbiBmcm9tICcuLi9hc3NldHMvd2FsbGV0LWNvbm5lY3QtYWN0aXZlLWljb24uc3ZnJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBDb25uZWN0aW9uU3RhdHVzUHJvcHMgPSB7XG4gIG9uRm9yZ2V0V2FsbGV0OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBDb25uZWN0aW9uU3RhdHVzID0gKHsgb25Gb3JnZXRXYWxsZXQgfTogQ29ubmVjdGlvblN0YXR1c1Byb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NvbmZpcm1pbmcsIHNldElzQ29uZmlybWluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCByZW5kZXJDb25maXJtYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKCFpc0NvbmZpcm1pbmcpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgYmc9XCJkYXJrXCJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnLTE3cHggLTMycHgnLCBoZWlnaHQ6ICcxMDB2aCcgfX1cbiAgICAgICAgZnVsbFxuICAgICAgICBpdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZmxleD1cImNvbFwiXG4gICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgcD1cIm1lZGl1bVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzE2cHgnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIG10PVwibWRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAzMDU3JyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZvcmdldCBXYWxsZXRcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiAnIzhBOEZBNCcsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzE2cHggMCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRoaXMgYnJvd3NlciB3aWxsIG5vIGxvbmdlciBjb25uZWN0IHRvIHlvdXIgUmFkaXggV2FsbGV0XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCb3ggaXRlbXM9XCJjZW50ZXJcIiBzdHlsZT17eyBnYXA6ICc4cHgnIH19PlxuICAgICAgICAgICAgPEJ1dHRvbiBzZWNvbmRhcnkgb25DbGljaz17KCkgPT4gc2V0SXNDb25maXJtaW5nKGZhbHNlKX0+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRm9yZ2V0V2FsbGV0KCl9IGZ1bGw+XG4gICAgICAgICAgICAgIEZvcmdldFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgcHk9XCJzbWFsbFwiXG4gICAgICAgIGZsZXg9XCJjb2xcIlxuICAgICAgICBqdXN0aWZ5PVwiYmV0d2VlblwiXG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICBpc0NvbmZpcm1pbmdcbiAgICAgICAgICAgID8geyBmaWx0ZXI6IGBibHVyKDEwcHgpYCwgaGVpZ2h0OiAnMTAwJScgfVxuICAgICAgICAgICAgOiB7IGhlaWdodDogJzEwMCUnIH1cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxQYWlyaW5nSGVhZGVyIGhlYWRlcj1cIlJhZGl4IFdhbGxldCBDb25uZWN0b3JcIiAvPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIG10PVwiM3hsXCJcbiAgICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTZweCcsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCA0cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNSknLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMzBweCcsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e1dhbGxldENvbm5lY3RlZEljb259IC8+XG4gICAgICAgICAgICA8Qm94IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyMHB4JyB9fT5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAzMDU3JyxcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjNweCcsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnNjAwJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmFkaXggV2FsbGV0IGxpbmtlZFxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGNvbG9yOiAnIzhBOEZBNCcgfX0+dG8gdGhpcyB3ZWIgYnJvd3NlcjwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBweD1cIm1lZGl1bVwiIG10PVwiM3hsXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzQ29uZmlybWluZyh0cnVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcsIGNvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGb3JnZXQgdGhpcyBSYWRpeCBXYWxsZXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICAgIHtyZW5kZXJDb25maXJtYXRpb24oKX1cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IHsgQ29ubmVjdGlvblBhc3N3b3JkIH0gZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3Rpb24tcGFzc3dvcmQnXG5pbXBvcnQgeyBDb25uZWN0aW9uU3RhdHVzIH0gZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3Rpb24tc3RhdHVzJ1xuaW1wb3J0IHsgUG9wdXBXaW5kb3cgfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY2hyb21lTG9jYWxTdG9yZSB9IGZyb20gJ2Nocm9tZS9oZWxwZXJzL2Nocm9tZS1sb2NhbC1zdG9yZSdcbmltcG9ydCB7IENvbm5lY3RvckNsaWVudCB9IGZyb20gJ2Nvbm5lY3Rvci9jb25uZWN0b3ItY2xpZW50J1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnY29uZmlnJ1xuaW1wb3J0IHsgb2sgfSBmcm9tICduZXZlcnRocm93J1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAndXRpbHMvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgUGFyaW5nID0gKCkgPT4ge1xuICBjb25zdCBbcGFpcmluZ1N0YXRlLCBzZXRQYWlyaW5nU3RhdGVdID0gdXNlU3RhdGU8XG4gICAgJ2xvYWRpbmcnIHwgJ25vdFBhaXJlZCcgfCAncGFpcmVkJ1xuICA+KCdsb2FkaW5nJylcbiAgY29uc3QgW2Nvbm5lY3Rpb25QYXNzd29yZCwgc2V0Q29ubmVjdGlvblBhc3N3b3JkXSA9IHVzZVN0YXRlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbm5lY3RvckNsaWVudCA9IENvbm5lY3RvckNsaWVudCh7XG4gICAgICBzb3VyY2U6ICdleHRlbnNpb24nLFxuICAgICAgdGFyZ2V0OiAnd2FsbGV0JyxcbiAgICAgIHNpZ25hbGluZ1NlcnZlckJhc2VVcmw6IGNvbmZpZy5zaWduYWxpbmdTZXJ2ZXIuYmFzZVVybCxcbiAgICAgIGlzSW5pdGlhdG9yOiBjb25maWcud2ViUlRDLmlzSW5pdGlhdG9yLFxuICAgICAgbG9nZ2VyLFxuICAgIH0pXG5cbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKGNoYW5nZXMsIGFyZWEpID0+IHtcbiAgICAgIGlmIChhcmVhID09PSAnbG9jYWwnICYmIGNoYW5nZXNbJ2Nvbm5lY3Rpb25QYXNzd29yZCddKSB7XG4gICAgICAgIGNvbnN0IHsgbmV3VmFsdWUgfSA9IGNoYW5nZXNbJ2Nvbm5lY3Rpb25QYXNzd29yZCddXG4gICAgICAgIGlmICghbmV3VmFsdWUpIGNvbm5lY3QoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBjb25uZWN0b3JDbGllbnQuY29ubmVjdGlvblBhc3N3b3JkJC5zdWJzY3JpYmUoXG4gICAgICAocGFzc3dvcmQpID0+IHtcbiAgICAgICAgc2V0Q29ubmVjdGlvblBhc3N3b3JkKHBhc3N3b3JkPy50b1N0cmluZygnaGV4JykpXG4gICAgICB9LFxuICAgIClcblxuICAgIGNvbnN0IGNvbm5lY3QgPSAoKSA9PlxuICAgICAgY2hyb21lTG9jYWxTdG9yZVxuICAgICAgICAuZ2V0SXRlbSgnY29ubmVjdGlvblBhc3N3b3JkJylcbiAgICAgICAgLmFuZFRoZW4oKHsgY29ubmVjdGlvblBhc3N3b3JkIH0pID0+IHtcbiAgICAgICAgICBpZiAoY29ubmVjdGlvblBhc3N3b3JkKSB7XG4gICAgICAgICAgICBjb25uZWN0b3JDbGllbnQuc2V0Q29ubmVjdGlvblBhc3N3b3JkKFxuICAgICAgICAgICAgICBCdWZmZXIuZnJvbShjb25uZWN0aW9uUGFzc3dvcmQsICdoZXgnKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBvayhudWxsKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25uZWN0b3JDbGllbnQuY29ubmVjdCgpXG4gICAgICAgICAgICBzZXRQYWlyaW5nU3RhdGUoJ25vdFBhaXJlZCcpXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdG9yQ2xpZW50XG4gICAgICAgICAgICAgIC5nZW5lcmF0ZUNvbm5lY3Rpb25QYXNzd29yZCgpXG4gICAgICAgICAgICAgIC5hbmRUaGVuKChidWZmZXIpID0+XG4gICAgICAgICAgICAgICAgY29ubmVjdG9yQ2xpZW50LmNvbm5lY3RlZCgpLmFuZFRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29ubmVjdG9yQ2xpZW50LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNocm9tZUxvY2FsU3RvcmUuc2V0SXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXNzd29yZDogYnVmZmVyLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICAgIHNldFBhaXJpbmdTdGF0ZSgncGFpcmVkJylcbiAgICAgICAgfSlcblxuICAgIGNvbm5lY3QoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbm5lY3RvckNsaWVudC5kZXN0cm95KClcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gICAgfVxuICB9LCBbc2V0UGFpcmluZ1N0YXRlLCBzZXRDb25uZWN0aW9uUGFzc3dvcmRdKVxuXG4gIHJldHVybiAoXG4gICAgPFBvcHVwV2luZG93PlxuICAgICAge3BhaXJpbmdTdGF0ZSA9PT0gJ25vdFBhaXJlZCcgJiYgKFxuICAgICAgICA8Q29ubmVjdGlvblBhc3N3b3JkIGNvbm5lY3Rpb25QYXNzd29yZD17Y29ubmVjdGlvblBhc3N3b3JkfSAvPlxuICAgICAgKX1cbiAgICAgIHtwYWlyaW5nU3RhdGUgPT09ICdwYWlyZWQnICYmIChcbiAgICAgICAgPENvbm5lY3Rpb25TdGF0dXNcbiAgICAgICAgICBvbkZvcmdldFdhbGxldD17KCkgPT4ge1xuICAgICAgICAgICAgY2hyb21lTG9jYWxTdG9yZS5yZW1vdmVJdGVtKCdjb25uZWN0aW9uUGFzc3dvcmQnKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUG9wdXBXaW5kb3c+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0ICcuLi8uLi9mb250cy5jc3MnXG5pbXBvcnQgeyBQYXJpbmcgfSBmcm9tICdwYWlyaW5nL3BhaXJpbmcnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykhKS5yZW5kZXIoPFBhcmluZyAvPilcbiJdLCJuYW1lcyI6WyJRckNvZGUiLCJ2YWx1ZSIsIkJveCIsImp1c3RpZnkiLCJwIiwibWIiLCJjaGlsZHJlbiIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJib3JkZXIiLCJRUkNvZGUiLCJiZ0NvbG9yIiwic2l6ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlBhaXJpbmdIZWFkZXIiLCJoZWFkZXIiLCJfRnJhZ21lbnQiLCJfanN4REVWIiwiSGVhZGVyIiwiVGV4dCIsImNvbG9yIiwibGluZUhlaWdodCIsIkNvbm5lY3Rpb25QYXNzd29yZCIsImNvbm5lY3Rpb25QYXNzd29yZCIsIm10IiwidGV4dEFsaWduIiwiTGluayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImhyZWYiLCJ0YXJnZXQiLCJXYWxsZXRDb25uZWN0ZWRJY29uIiwiQ29ubmVjdGlvblN0YXR1cyIsIm9uRm9yZ2V0V2FsbGV0IiwiaXNDb25maXJtaW5nIiwic2V0SXNDb25maXJtaW5nIiwidXNlU3RhdGUiLCJweSIsImZsZXgiLCJmaWx0ZXIiLCJoZWlnaHQiLCJiZyIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJzcmMiLCJtYXJnaW5MZWZ0IiwicHgiLCJCdXR0b24iLCJ0ZXh0Iiwib25DbGljayIsInJlbmRlckNvbmZpcm1hdGlvbiIsInBvc2l0aW9uIiwibWFyZ2luIiwiZnVsbCIsIml0ZW1zIiwibWF4V2lkdGgiLCJnYXAiLCJzZWNvbmRhcnkiLCJQYXJpbmciLCJwYWlyaW5nU3RhdGUiLCJzZXRQYWlyaW5nU3RhdGUiLCJzZXRDb25uZWN0aW9uUGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJjb25uZWN0b3JDbGllbnQiLCJDb25uZWN0b3JDbGllbnQiLCJzb3VyY2UiLCJzaWduYWxpbmdTZXJ2ZXJCYXNlVXJsIiwiY29uZmlnIiwic2lnbmFsaW5nU2VydmVyIiwiYmFzZVVybCIsImlzSW5pdGlhdG9yIiwid2ViUlRDIiwibG9nZ2VyIiwiY2hyb21lIiwic3RvcmFnZSIsIm9uQ2hhbmdlZCIsImFkZExpc3RlbmVyIiwiY2hhbmdlcyIsImFyZWEiLCJuZXdWYWx1ZSIsImNvbm5lY3QiLCJzdWJzY3JpcHRpb24iLCJjb25uZWN0aW9uUGFzc3dvcmQkIiwic3Vic2NyaWJlIiwicGFzc3dvcmQiLCJ0b1N0cmluZyIsImNocm9tZUxvY2FsU3RvcmUiLCJnZXRJdGVtIiwiYW5kVGhlbiIsIkJ1ZmZlciIsImZyb20iLCJvayIsImdlbmVyYXRlQ29ubmVjdGlvblBhc3N3b3JkIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdCIsInNldEl0ZW0iLCJidWZmZXIiLCJtYXAiLCJkZXN0cm95IiwidW5zdWJzY3JpYmUiLCJQb3B1cFdpbmRvdyIsInJlbW92ZUl0ZW0iLCJSZWFjdERPTSIsImNyZWF0ZVJv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
