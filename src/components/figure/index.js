import { h, Component } from 'preact';

export const Figure = ({ creator, imageOnly = false, small, leftMargin }) => {
    const width = imageOnly || small ? 20 : 30
    return (
    <figure style={{ display: 'flex', margin: 0, alignItems: 'center' }}>
        <img width={width} height={width} src={ creator.avatar_url } style={{ borderRadius: '50%', marginRight: '10px', marginLeft: leftMargin && '40px' }} />
        { !imageOnly && <figcaption style={{display: 'inline'}}> { creator.name }</figcaption> }
    </figure>
)}