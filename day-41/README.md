- `useEffect` with empty dependencies
  - It will execute the function only on very first render
- `useEffect` with single dependency
  ```javascript
  useEffect(() => {
    console.log("called");
  }, [counter]);
  ```
  - It will execute the function when counter updates and on very first render
- `useEffect` with multiple dependencies
- React Fragment
- `useNavigate` - we used it in navbar for routing
- Dynamic Routing and `useParams()`
- short-code for component boilerplate: `rafce`
