import React, {Component} from 'react'

class Home extends Component {
    render() {
        return(
            <div className='col-xs-12'>
                <div className='page-header'><h2>Welcome to Bootstrap-REACT</h2></div>
                <div className='col-md-8'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius erat nec cursus elementum. Donec ut magna nec massa sagittis cursus. Quisque bibendum, lorem ut placerat semper, mi tellus mattis nulla, sit amet scelerisque nisl sapien id mi. Duis a dolor tortor. Fusce sit amet mattis tortor. Vestibulum aliquet risus at lobortis vehicula. Praesent id orci eu mauris gravida consectetur sed eget lorem. Curabitur tincidunt vel neque vel ultrices. Nunc sagittis egestas nunc id convallis. Mauris eu imperdiet orci, sed aliquam nulla. Cras iaculis commodo mattis. Nam vehicula convallis magna, et vulputate lorem elementum id. Nunc sit amet elit purus.</p>
                    <p>Fusce eu condimentum orci, et dignissim turpis. Nulla pulvinar quis ipsum vel malesuada. Nam nunc elit, semper in gravida a, tristique vel sem. Cras vestibulum vitae elit ac dictum.</p>
                    <hr/>
                    <div className='right'>
                        <button className='btn btn-dafault'> Vivamus placerat </button>
                        <button className='btn btn-info'> Pellentesque </button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='alert alert-info'>
                        Donec et risus non eros vestibulum sodales. 
                        Mauris sodales arcu quam, in tempus arcu hendrerit a. Sed.
                    </div>
                    <div className='alert alert-warning'>
                        Vivamus placerat ex odio, sit amet aliquam justo eleifend sed. Donec iaculis, dui ac ornare efficitur, velit justo tincidunt felis, vitae hendrerit nunc urna eget quam. Nam nec sem lacus. Proin maximus tempor metus, eget suscipit erat rhoncus eu.
                    </div>
                </div>

            </div>
        )
    }
}

export default Home