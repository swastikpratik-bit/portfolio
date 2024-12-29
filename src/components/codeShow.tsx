const CodeDisplay = () => {
    return (
      <section className='code-section '>
        <div className="p-2 m-2 lg:p-6 lg:m-6 lg:text-2xl">
        <pre>
          1&nbsp;&nbsp;&nbsp;&nbsp;const <b>Person</b> = (&nbsp;) =&gt; &nbsp;&#123;
        </pre>
        <pre>
          2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [ &nbsp;name, setName &nbsp;] = useState(&apos;&apos;);
        </pre>
        <pre>
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [&nbsp; role, setRole &nbsp;] = useState(&apos;&apos;);
        </pre>
        <pre>
          4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [&nbsp; interests, setInterests &nbsp;] = useState(&apos;&apos;);
        </pre>
        <pre>
          6
        </pre>
        <pre>
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; useEffect(() =&gt; &#123;
        </pre>
        <pre>
          6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setName(&nbsp;&quot;<b>Swastik Pratik</b>&quot;&nbsp;);
        </pre>
        <pre>
          7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setRole(&nbsp;&quot;<b>Software Engineer</b>&quot;&nbsp;);
        </pre>
        <pre>
          8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setInterest(&quot;<b>Development, Crypto</b>&quot;);
        </pre>
        <pre>
          9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;, []);
        </pre>
        <pre>
          10 &nbsp; &#125;
        </pre>
        </div>
      </section>
    )
  }
  
  export default CodeDisplay;