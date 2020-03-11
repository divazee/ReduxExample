import React, { Component } from 'react'

export default class Postform extends Component {
    render() {
        return (
            <div>
                <h1>PostForm</h1>

                <form>
                    <div>
                        <label>Title:</label>
                        <br/>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label>Body:</label>
                        <br/>
                        <textarea name="body" />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
