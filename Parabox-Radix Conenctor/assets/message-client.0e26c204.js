import{a as f,e as T,R as j}from"./index.es.095da3c8.js";import{a as C,c,w as y}from"./Subject.c67f7ae3.js";import{R as k,f as M,a as w,b as x,m as R,d as l}from"./first.9e6ac58d.js";import{s as E}from"./send-message.6e0479e0.js";const F=()=>({messageSubject:new k(1)}),D=(m,d,g)=>{const r=g.subjects||F(),i=g.sendMessage||E,u=new C,t=(s,e)=>{const n=s.source!=="background"&&e?c.sendMessageToTab(s.source,e,s):s,h=r.messageSubject.pipe(M(o=>o.message.discriminator==="confirmation"&&n.messageId===o.message.messageId),x(),R(o=>o.message.success?f(o.message.data):T(o.message.error))),S=j.fromSafePromise(l(h)).andThen(o=>o);return i(n,e).andThen(()=>S)},b=({origin:s,messageId:e,tabId:a,data:n})=>i(c.confirmationSuccess(s,e,n),a),p=({origin:s,messageId:e,error:a,tabId:n})=>i(c.confirmationError(s,e,a),n);return u.add(r.messageSubject.pipe(M(({message:s})=>s.discriminator!=="confirmation"),w(({message:s,tabId:e})=>m(s,t,e).andThen(a=>a.sendConfirmation?b({origin:d,messageId:s.messageId,tabId:e,data:a.data}):f(void 0)).mapErr(a=>{a.reason!=="unhandledMessageDiscriminator"&&p({origin:d,messageId:s.messageId,error:a,tabId:s.discriminator===y.sendMessageToTab?void 0:e})}))).subscribe()),{onMessage:(s,e)=>r.messageSubject.next({message:s,tabId:e}),handleMessage:(s,e)=>m(s,t,e),sendMessageAndWaitForConfirmation:t,destroy:()=>{u.unsubscribe()}}};export{D as M};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1jbGllbnQuMGUyNmMyMDQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaHJvbWUvbWVzc2FnZXMvc3ViamVjdHMudHMiLCIuLi8uLi9zcmMvY2hyb21lL21lc3NhZ2VzL21lc3NhZ2UtY2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vX3R5cGVzJ1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlU3ViamVjdHMgPSBSZXR1cm5UeXBlPHR5cGVvZiBNZXNzYWdlU3ViamVjdHM+XG5leHBvcnQgY29uc3QgTWVzc2FnZVN1YmplY3RzID0gKCkgPT4gKHtcbiAgbWVzc2FnZVN1YmplY3Q6IG5ldyBSZXBsYXlTdWJqZWN0PHtcbiAgICBtZXNzYWdlOiBNZXNzYWdlXG4gICAgdGFiSWQ/OiBudW1iZXJcbiAgfT4oMSksXG59KVxuIiwiaW1wb3J0IHsgZXJyLCBvaywgUmVzdWx0LCBSZXN1bHRBc3luYyB9IGZyb20gJ25ldmVydGhyb3cnXG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIGZpcnN0LFxuICBmaXJzdFZhbHVlRnJvbSxcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgU3Vic2NyaXB0aW9uLFxufSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgY3JlYXRlTWVzc2FnZSB9IGZyb20gJy4vY3JlYXRlLW1lc3NhZ2UnXG5pbXBvcnQge1xuICBDb25maXJtYXRpb25NZXNzYWdlRXJyb3IsXG4gIENvbmZpcm1hdGlvbk1lc3NhZ2VTdWNjZXNzLFxuICBNZXNzYWdlLFxuICBtZXNzYWdlRGlzY3JpbWluYXRvcixcbiAgTWVzc2FnZUhhbmRsZXIsXG4gIE1lc3NhZ2VzLFxuICBNZXNzYWdlU291cmNlLFxufSBmcm9tICcuL190eXBlcydcbmltcG9ydCB7IE1lc3NhZ2VTdWJqZWN0cyB9IGZyb20gJy4vc3ViamVjdHMnXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSBhcyBzZW5kTWVzc2FnZUZuLCBTZW5kTWVzc2FnZSB9IGZyb20gJy4vc2VuZC1tZXNzYWdlJ1xuaW1wb3J0IHsgQXBwTG9nZ2VyIH0gZnJvbSAndXRpbHMvbG9nZ2VyJ1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlQ2xpZW50ID0gUmV0dXJuVHlwZTx0eXBlb2YgTWVzc2FnZUNsaWVudD5cblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VDbGllbnQgPSAoXG4gIGhhbmRsZXI6IE1lc3NhZ2VIYW5kbGVyLFxuICBvcmlnaW46IE1lc3NhZ2VTb3VyY2UsXG4gIGlucHV0OiB7XG4gICAgc3ViamVjdHM/OiBNZXNzYWdlU3ViamVjdHNcbiAgICBzZW5kTWVzc2FnZT86IFNlbmRNZXNzYWdlXG4gICAgbG9nZ2VyOiBBcHBMb2dnZXJcbiAgfSxcbikgPT4ge1xuICBjb25zdCBzdWJqZWN0cyA9IGlucHV0LnN1YmplY3RzIHx8IE1lc3NhZ2VTdWJqZWN0cygpXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gaW5wdXQuc2VuZE1lc3NhZ2UgfHwgc2VuZE1lc3NhZ2VGblxuXG4gIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKClcblxuICBjb25zdCBzZW5kTWVzc2FnZUFuZFdhaXRGb3JDb25maXJtYXRpb24gPSA8VCA9IHVuZGVmaW5lZD4oXG4gICAgdmFsdWU6IE1lc3NhZ2UsXG4gICAgdGFiSWQ/OiBudW1iZXIsXG4gICk6IFJlc3VsdEFzeW5jPFQsIENvbmZpcm1hdGlvbk1lc3NhZ2VFcnJvclsnZXJyb3InXT4gPT4ge1xuICAgIGNvbnN0IHNob3VsZFByb3h5TWVzc2FnZVRocm91Z2hCYWNrZ3JvdW5kID1cbiAgICAgIHZhbHVlLnNvdXJjZSAhPT0gJ2JhY2tncm91bmQnICYmIHRhYklkXG5cbiAgICBjb25zdCBtZXNzYWdlID0gc2hvdWxkUHJveHlNZXNzYWdlVGhyb3VnaEJhY2tncm91bmRcbiAgICAgID8gY3JlYXRlTWVzc2FnZS5zZW5kTWVzc2FnZVRvVGFiKHZhbHVlLnNvdXJjZSwgdGFiSWQsIHZhbHVlKVxuICAgICAgOiB2YWx1ZVxuXG4gICAgY29uc3QgY29uZmlybWF0aW9uJCA9IHN1YmplY3RzLm1lc3NhZ2VTdWJqZWN0LnBpcGUoXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgKTogdmFsdWUgaXMgeyBtZXNzYWdlOiBNZXNzYWdlc1snY29uZmlybWF0aW9uJ107IHRhYklkPzogbnVtYmVyIH0gPT5cbiAgICAgICAgICB2YWx1ZS5tZXNzYWdlLmRpc2NyaW1pbmF0b3IgPT09ICdjb25maXJtYXRpb24nICYmXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlSWQgPT09IHZhbHVlLm1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgKSxcbiAgICAgIGZpcnN0KCksXG4gICAgICBtYXAoXG4gICAgICAgIChcbiAgICAgICAgICBjb25maXJtYXRpb24sXG4gICAgICAgICk6IFJlc3VsdDxcbiAgICAgICAgICBDb25maXJtYXRpb25NZXNzYWdlU3VjY2VzczxUPlsnZGF0YSddLFxuICAgICAgICAgIENvbmZpcm1hdGlvbk1lc3NhZ2VFcnJvclsnZXJyb3InXVxuICAgICAgICA+ID0+XG4gICAgICAgICAgY29uZmlybWF0aW9uLm1lc3NhZ2Uuc3VjY2Vzc1xuICAgICAgICAgICAgPyBvayhjb25maXJtYXRpb24ubWVzc2FnZS5kYXRhKVxuICAgICAgICAgICAgOiBlcnIoY29uZmlybWF0aW9uLm1lc3NhZ2UuZXJyb3IpLFxuICAgICAgKSxcbiAgICApXG5cbiAgICBjb25zdCB3YWl0Rm9yQ29uZmlybWF0aW9uID0gUmVzdWx0QXN5bmMuZnJvbVNhZmVQcm9taXNlKFxuICAgICAgZmlyc3RWYWx1ZUZyb20oY29uZmlybWF0aW9uJCksXG4gICAgKS5hbmRUaGVuKChyZXN1bHQpID0+IHJlc3VsdClcblxuICAgIHJldHVybiBzZW5kTWVzc2FnZShtZXNzYWdlLCB0YWJJZCkuYW5kVGhlbigoKSA9PiB3YWl0Rm9yQ29uZmlybWF0aW9uKVxuICB9XG5cbiAgY29uc3Qgc2VuZENvbmZpcm1hdGlvblN1Y2Nlc3MgPSA8VCA9IGFueT4oe1xuICAgIG9yaWdpbixcbiAgICBtZXNzYWdlSWQsXG4gICAgdGFiSWQsXG4gICAgZGF0YSxcbiAgfToge1xuICAgIG9yaWdpbjogTWVzc2FnZVNvdXJjZVxuICAgIG1lc3NhZ2VJZDogc3RyaW5nXG4gICAgdGFiSWQ/OiBudW1iZXJcbiAgICBkYXRhOiBUXG4gIH0pID0+XG4gICAgc2VuZE1lc3NhZ2UoXG4gICAgICBjcmVhdGVNZXNzYWdlLmNvbmZpcm1hdGlvblN1Y2Nlc3Mob3JpZ2luLCBtZXNzYWdlSWQsIGRhdGEpLFxuICAgICAgdGFiSWQsXG4gICAgKVxuXG4gIGNvbnN0IHNlbmRDb25maXJtYXRpb25FcnJvciA9ICh7XG4gICAgb3JpZ2luLFxuICAgIG1lc3NhZ2VJZCxcbiAgICBlcnJvcixcbiAgICB0YWJJZCxcbiAgfToge1xuICAgIG9yaWdpbjogTWVzc2FnZVNvdXJjZVxuICAgIG1lc3NhZ2VJZDogc3RyaW5nXG4gICAgZXJyb3I6IENvbmZpcm1hdGlvbk1lc3NhZ2VFcnJvclsnZXJyb3InXVxuICAgIHRhYklkPzogbnVtYmVyXG4gIH0pID0+XG4gICAgc2VuZE1lc3NhZ2UoXG4gICAgICBjcmVhdGVNZXNzYWdlLmNvbmZpcm1hdGlvbkVycm9yKG9yaWdpbiwgbWVzc2FnZUlkLCBlcnJvciksXG4gICAgICB0YWJJZCxcbiAgICApXG5cbiAgc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgc3ViamVjdHMubWVzc2FnZVN1YmplY3RcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgbWVzc2FnZSB9KSA9PiBtZXNzYWdlLmRpc2NyaW1pbmF0b3IgIT09ICdjb25maXJtYXRpb24nKSxcbiAgICAgICAgbWVyZ2VNYXAoKHsgbWVzc2FnZSwgdGFiSWQgfSkgPT5cbiAgICAgICAgICBoYW5kbGVyKG1lc3NhZ2UsIHNlbmRNZXNzYWdlQW5kV2FpdEZvckNvbmZpcm1hdGlvbiwgdGFiSWQpXG4gICAgICAgICAgICAuYW5kVGhlbigocmVzdWx0KSA9PlxuICAgICAgICAgICAgICByZXN1bHQuc2VuZENvbmZpcm1hdGlvblxuICAgICAgICAgICAgICAgID8gc2VuZENvbmZpcm1hdGlvblN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIHRhYklkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBvayh1bmRlZmluZWQpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcEVycigoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLnJlYXNvbiAhPT0gJ3VuaGFuZGxlZE1lc3NhZ2VEaXNjcmltaW5hdG9yJylcbiAgICAgICAgICAgICAgICBzZW5kQ29uZmlybWF0aW9uRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgb3JpZ2luLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgdGFiSWQ6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZGlzY3JpbWluYXRvciA9PT1cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURpc2NyaW1pbmF0b3Iuc2VuZE1lc3NhZ2VUb1RhYlxuICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgOiB0YWJJZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCksXG4gIClcblxuICByZXR1cm4ge1xuICAgIG9uTWVzc2FnZTogKG1lc3NhZ2U6IE1lc3NhZ2UsIHRhYklkPzogbnVtYmVyKSA9PlxuICAgICAgc3ViamVjdHMubWVzc2FnZVN1YmplY3QubmV4dCh7IG1lc3NhZ2UsIHRhYklkIH0pLFxuICAgIGhhbmRsZU1lc3NhZ2U6IChtZXNzYWdlOiBNZXNzYWdlLCB0YWJJZD86IG51bWJlcikgPT5cbiAgICAgIGhhbmRsZXIobWVzc2FnZSwgc2VuZE1lc3NhZ2VBbmRXYWl0Rm9yQ29uZmlybWF0aW9uLCB0YWJJZCksXG4gICAgc2VuZE1lc3NhZ2VBbmRXYWl0Rm9yQ29uZmlybWF0aW9uLFxuICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXNzYWdlU3ViamVjdHMiLCJSZXBsYXlTdWJqZWN0IiwiTWVzc2FnZUNsaWVudCIsImhhbmRsZXIiLCJvcmlnaW4iLCJpbnB1dCIsInN1YmplY3RzIiwic2VuZE1lc3NhZ2UiLCJzZW5kTWVzc2FnZUZuIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbiIsInNlbmRNZXNzYWdlQW5kV2FpdEZvckNvbmZpcm1hdGlvbiIsInZhbHVlIiwidGFiSWQiLCJtZXNzYWdlIiwiY3JlYXRlTWVzc2FnZSIsImNvbmZpcm1hdGlvbiQiLCJmaWx0ZXIiLCJmaXJzdCIsIm1hcCIsImNvbmZpcm1hdGlvbiIsIm9rIiwiZXJyIiwid2FpdEZvckNvbmZpcm1hdGlvbiIsIlJlc3VsdEFzeW5jIiwiZmlyc3RWYWx1ZUZyb20iLCJyZXN1bHQiLCJzZW5kQ29uZmlybWF0aW9uU3VjY2VzcyIsIm1lc3NhZ2VJZCIsImRhdGEiLCJzZW5kQ29uZmlybWF0aW9uRXJyb3IiLCJlcnJvciIsIm1lcmdlTWFwIiwibWVzc2FnZURpc2NyaW1pbmF0b3IiXSwibWFwcGluZ3MiOiJzT0FJTyxNQUFNQSxFQUFrQixLQUFPLENBQ3BDLGVBQWdCLElBQUlDLEVBR2pCLENBQUMsQ0FDTixHQ2dCYUMsRUFBZ0IsQ0FDM0JDLEVBQ0FDLEVBQ0FDLElBS0csQ0FDRyxNQUFBQyxFQUFXRCxFQUFNLFVBQVlMLEVBQWdCLEVBQzdDTyxFQUFjRixFQUFNLGFBQWVHLEVBRW5DQyxFQUFnQixJQUFJQyxFQUVwQkMsRUFBb0MsQ0FDeENDLEVBQ0FDLElBQ3NELENBSWhELE1BQUFDLEVBRkpGLEVBQU0sU0FBVyxjQUFnQkMsRUFHL0JFLEVBQWMsaUJBQWlCSCxFQUFNLE9BQVFDLEVBQU9ELENBQUssRUFDekRBLEVBRUVJLEVBQWdCVixFQUFTLGVBQWUsS0FDNUNXLEVBRUlMLEdBRUFBLEVBQU0sUUFBUSxnQkFBa0IsZ0JBQ2hDRSxFQUFRLFlBQWNGLEVBQU0sUUFBUSxTQUN4QyxFQUNBTSxFQUFNLEVBQ05DLEVBRUlDLEdBS0FBLEVBQWEsUUFBUSxRQUNqQkMsRUFBR0QsRUFBYSxRQUFRLElBQUksRUFDNUJFLEVBQUlGLEVBQWEsUUFBUSxLQUFLLENBQ3RDLENBQUEsRUFHSUcsRUFBc0JDLEVBQVksZ0JBQ3RDQyxFQUFlVCxDQUFhLENBQzVCLEVBQUEsUUFBU1UsR0FBV0EsQ0FBTSxFQUU1QixPQUFPbkIsRUFBWU8sRUFBU0QsQ0FBSyxFQUFFLFFBQVEsSUFBTVUsQ0FBbUIsQ0FBQSxFQUdoRUksRUFBMEIsQ0FBVSxDQUN4QyxPQUFBdkIsRUFDQSxVQUFBd0IsRUFDQSxNQUFBZixFQUNBLEtBQUFnQixDQUFBLElBT0F0QixFQUNFUSxFQUFjLG9CQUFvQlgsRUFBUXdCLEVBQVdDLENBQUksRUFDekRoQixDQUFBLEVBR0VpQixFQUF3QixDQUFDLENBQzdCLE9BQUExQixFQUNBLFVBQUF3QixFQUNBLE1BQUFHLEVBQ0EsTUFBQWxCLENBQUEsSUFPQU4sRUFDRVEsRUFBYyxrQkFBa0JYLEVBQVF3QixFQUFXRyxDQUFLLEVBQ3hEbEIsQ0FBQSxFQUdVLE9BQUFKLEVBQUEsSUFDWkgsRUFBUyxlQUNOLEtBQ0NXLEVBQU8sQ0FBQyxDQUFFLFFBQUFILEtBQWNBLEVBQVEsZ0JBQWtCLGNBQWMsRUFDaEVrQixFQUFTLENBQUMsQ0FBRSxRQUFBbEIsRUFBUyxNQUFBRCxLQUNuQlYsRUFBUVcsRUFBU0gsRUFBbUNFLENBQUssRUFDdEQsUUFBU2EsR0FDUkEsRUFBTyxpQkFDSEMsRUFBd0IsQ0FDdEIsT0FBQXZCLEVBQ0EsVUFBV1UsRUFBUSxVQUNuQixNQUFBRCxFQUNBLEtBQU1hLEVBQU8sSUFBQSxDQUNkLEVBQ0RMLEVBQUcsTUFBUyxDQUFBLEVBRWpCLE9BQVFVLEdBQVUsQ0FDYkEsRUFBTSxTQUFXLGlDQUNHRCxFQUFBLENBQ3BCLE9BQUExQixFQUNBLFVBQVdVLEVBQVEsVUFDbkIsTUFBQWlCLEVBQ0EsTUFDRWpCLEVBQVEsZ0JBQ1JtQixFQUFxQixpQkFDakIsT0FDQXBCLENBQUEsQ0FDUCxDQUFBLENBQ0osQ0FDTCxHQUVELFVBQVUsQ0FBQSxFQUdSLENBQ0wsVUFBVyxDQUFDQyxFQUFrQkQsSUFDNUJQLEVBQVMsZUFBZSxLQUFLLENBQUUsUUFBQVEsRUFBUyxNQUFBRCxFQUFPLEVBQ2pELGNBQWUsQ0FBQ0MsRUFBa0JELElBQ2hDVixFQUFRVyxFQUFTSCxFQUFtQ0UsQ0FBSyxFQUMzRCxrQ0FBQUYsRUFDQSxRQUFTLElBQU0sQ0FDYkYsRUFBYyxZQUFZLENBQzVCLENBQUEsQ0FFSiJ9
