function ProductCard(props) {
  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "white",
        borderRadius: "15px",
        overflow: "hidden",
        margin: "20px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        transition: "0.3s",
      }}
    >
      <img
        src={props.image}
        alt="product"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h2
          style={{
            fontSize: "22px",
            marginBottom: "10px",
          }}
        >
          {props.name}
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#2563eb",
            fontWeight: "bold",
          }}
        >
          ₹{props.price}
        </p>

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#111827",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;