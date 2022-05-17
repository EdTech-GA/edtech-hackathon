import React from 'react'

export default function SyllabusPage(props) {
    const itemsFromDB = props.data.map((d) => (
      <SyllabusItem key={d._id} item={d} />
    ));
    return <div>test</div>;
  }