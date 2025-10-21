export default function Button(props){
      const myBtn = { 
        background: '#4CAF4F',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        marginTop: '20px',
      };
      return(
            <button style={myBtn}>{props.name}</button>
      );
}