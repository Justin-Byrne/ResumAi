( ( ) =>
{
	console.clear ( );

	let LIMITS =
	{
		body_ratio:  				// 762 x 1003 - DESIRED WIDTH AND HEIGHT
		[
			762,
			1003
		],
		job_description: 1561
	}

	//// 	BODY RATIO 	////

	let body = document.getElementsByTagName ( 'body' ) [ 0 ];

		console.log ( 'body: ', body.clientWidth, 'x', body.clientHeight );

	//// 	CHARACTERS 	////

	let job_description_character_count = 0;

	let jobs = document.querySelectorAll ( '.job > ul > li' );


		for ( let job of jobs ) job_description_character_count += job.innerHTML.length;


    	console.log ( 'job_description_character_count: ', job_description_character_count );

} ) ( );

////////////////////////////////////////////////////////////////
//// 	GLOBALS 	////////////////////////////////////////////

let ERROR_LIST =
{
	body_ratio:      false,
	job_description: false
}
