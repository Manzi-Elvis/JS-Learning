
export default function Card(props){
      const cardStyle = {
            background: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      };
      const blogImageStyle = {height: '200px'};
      const blogContent = {padding: '1.5rem'};
      const buttonStyle = {
            textDecoration: 'none',
            color:'grey',
      };
      return(
           <div style={cardStyle}>
                  <img style = {blogImageStyle} src={props.path}/>
                  <h2 style = {blogContent}>{props.title}</h2>
                  <button style = {buttonStyle}>Read more →</button>
           </div>
      );
}