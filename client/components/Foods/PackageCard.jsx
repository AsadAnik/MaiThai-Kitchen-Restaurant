import React from 'react'
import Image from 'next/image'

const PackageCard = ({ item }) => {
    // RENDERING INNER FOODS LIST OF INDIVIDUAL FOODS..
    const renderNestedItems = (items) => {
        return items?.length && items.map(item => (
            <li key={item?.name}>
                  <a href={`https://www.google.com/search?q=${item?.name}&tbm=isch`} target="_blank">{item?.name}</a>
            </li>
        ));
    };

    return (
        <li className="d-flex mb-4 all-food-list">
            {/* list-image */}
            <div className="list-img">
                <Image src={`/${item.image}`} alt="Hotel Logo" width={100} height={100} />
            </div>
            {/* list-body */}
            <div className="list-body ml-4 mr-2">
                <h5>{item.name}</h5>
                <ul className="list-body-mini-list">
                    {renderNestedItems(item?.package)}
                </ul>
                <p style={{ fontSize: 14 }} className="text-muted mt-2">
                    {item.details}
                </p>
            </div>
            {/* list-footer */}
            <div className="list-footer">
                <div className="discount-title">
                    <h5 className="text-danger">${item?.price} {!item.oldPrice ? '' : '/'} <del>{item?.oldPrice}</del></h5>
                </div>
                <div className="list-footer-btn mt-4">
                    <button className="btn-list-order">
                        <i className="fas fa-plus-circle" />
                        <span>Add Cart</span>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default PackageCard