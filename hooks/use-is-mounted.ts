import { useEffect, useState } from 'react'

function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false)
// we use this hook to avoid hydration error
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

export default useIsMounted

// The useIsMounted hook is a simple yet powerful utility for managing component lifecycle states in React applications. By tracking whether a component is mounted, it enables developers to:

// Avoid Hydration Errors: Prevent inconsistencies between server-rendered HTML and client-side DOM by ensuring that side effects and asynchronous operations occur after hydration.
// Safeguard Asynchronous Operations: Ensure that state updates from asynchronous operations only occur if the component is still mounted, preventing memory leaks and potential errors.
// Manage Complex Side Effects: Integrate with other hooks to handle more complex scenarios, such as debouncing, throttling, or managing subscriptions.
// While the useIsMounted hook is a useful tool, it's essential to use it judiciously and understand its implications on performance and code complexity. In many cases, using useRef for tracking mounted state can be more efficient, especially when dealing with asynchronous operations.