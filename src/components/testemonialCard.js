import React, { useEffect } from "react"
import styled from "styled-components"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const TestemonialCard = ({ person, updateList }) => {
  const url = `http://localhost:4000/assets/${person.asset}`
  const { data: result, error } = useSWR(url, fetcher)

  useEffect(() => {
    if (result) updateList(result.url)
  }, [result])

  return (
    <StyledTestemonialCard>
      {result && <img src={result.url} alt="portrait" />}
    </StyledTestemonialCard>
  )
}

const StyledTestemonialCard = styled.li``

export default TestemonialCard
