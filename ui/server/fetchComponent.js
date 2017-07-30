
export function fetchComponent(dispatch, components, params) {
  const needs = components
      .filter(component => component)
      .reduce((prev, current) => {
        return (current.needs || [])
          .concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
          .concat(prev)
        }, [])

  const promises = needs.map(need => dispatch(need(params)))
  return Promise.all(promises)
}